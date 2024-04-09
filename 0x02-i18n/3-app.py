#!/usr/bin/env python3
"""
Parametrize Templates
"""

from flask import Flask, render_template
from flask_babel import Babel

app = Flask(__name__)
babel = Babel(app)


class Config:
    """
    Config class for Flask app.
    """

    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)


@app.route("/")
def index() -> str:
    """
    Render the index template.
    """
    return render_template("3-index.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)