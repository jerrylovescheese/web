from flask_frozen import Freezer
from app import app  # Adjust the import as needed

freezer = Freezer(app)


if __name__ == '__main__':
    app.run(debug=True)
