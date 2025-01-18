from flask import Flask, render_template

app = Flask(__name__, template_folder="assets/templates")

# Serve static files from the 'assets' folder
app.static_folder = "assets"


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
