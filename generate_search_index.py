import os
import json
from bs4 import BeautifulSoup

# Path to the folder containing HTML files
HTML_DIR = "./pages"

# Output file
OUTPUT_FILE = "./search-index.json"

# Function to extract content from an HTML file
def extract_content(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        soup = BeautifulSoup(file, "html.parser")

        # Extract the page title
        title = soup.title.string if soup.title else "No Title"

        # Extract visible text content (ignoring script/style tags)
        content = " ".join(
            [text.strip() for text in soup.stripped_strings]
        )

        return title, content

# Generate search index
def generate_search_index():
    index = []
    file_id = 1

    # Walk through the directory and process all HTML files
    for root, _, files in os.walk(HTML_DIR):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                url = os.path.relpath(file_path, HTML_DIR)

                # Extract content
                title, content = extract_content(file_path)

                # Add to index
                index.append({
                    "id": str(file_id),
                    "title": title,
                    "url": f"/{url}",  # Adjust path for your site
                    "content": content,
                })
                file_id += 1

    # Write to JSON file
    with open(OUTPUT_FILE, "w", encoding="utf-8") as output_file:
        json.dump(index, output_file, indent=2, ensure_ascii=False)

    print(f"Search index generated: {OUTPUT_FILE}")

# Run the script
if __name__ == "__main__":
    generate_search_index()
