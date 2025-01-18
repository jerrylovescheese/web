"""
    Author: Genrative AI
    Date: 2025-01-18
    Version: 1.0
"""

from flask import Flask, render_template, abort
from flask_frozen import Freezer
import os

app = Flask(__name__, template_folder="assets/templates")

# Serve static files from the 'assets' folder
app.static_folder = "assets"


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/pages/<page_name>.html")
def serve_page(page_name):
    page_path = os.path.join("pages", f"{page_name}.html")
    if os.path.exists(page_path):
        # Read the page content here and pass it to the template
        with open(page_path, "r") as file:
            content = file.read()
        return render_template("dynamic_page.html", content=content)
    else:
        abort(404)  # Return a 404 error if the page doesn't exist


freezer = Freezer(app)

# Register generator for dynamic pages


@freezer.register_generator
def serve_page():
    # List all files in the 'pages' directory
    pages_dir = "pages"
    for file_name in os.listdir(pages_dir):
        if file_name.endswith(".html"):
            # Pass the page name without '.html'
            yield {"page_name": file_name[:-5]}


if __name__ == '__main__':
    freezer.freeze()
