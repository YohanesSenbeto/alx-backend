#!/usr/bin/env python3
"""
Mock Logging In
"""

from flask import Flask, render_template, request, g
from flask_babel import Babel, _

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


@app.before_request
def before_request():
    """
    Get user before request.
    """
    user_id = request.args.get("login_as")
    g.user = None
    if user_id:
        g.user = get_user(int(user_id))


def get_user(user_id: int) -> dict:
    """
    Get user information.
    """
    users = {
        1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
        2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
        3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
        4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
    }
    return users.get(user_id, {})


@app.route("/")
def index() -> str:
    """
    Render the index template.
    """
    return render_template("5-index.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
