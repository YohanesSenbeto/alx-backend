# This is i18n project
# 0x02-i18n - Internationalization and Localization in Flask

This repository contains the implementation of a Flask application with internationalization (i18n) and localization (l10n) features. The project focuses on configuring Flask-Babel extension to support multiple languages, detecting user locale from request parameters, and displaying localized content.

## Table of Contents

- [Description](#description)
- [Requirements](#requirements)
- [Tasks](#tasks)
- [Resources](#resources)
- [License](#license)

## Description

The goal of this project is to create a Flask application that supports internationalization and localization features. The tasks include setting up basic Flask app, configuring Babel extension, parametrizing templates, detecting locale from request parameters, and displaying current time in the appropriate timezone and format.

## Requirements

- All files are interpreted/compiled on Ubuntu 18.04 LTS using Python 3.7.
- Files should adhere to PEP8 style guidelines.
- All Python files should be executable.
- Modules, classes, functions, and coroutines should be properly documented.
- Functions and coroutines must be type-annotated.

## Tasks

The project consists of several tasks, each focusing on a specific aspect of internationalization and localization in Flask:

1. **Basic Flask App**: Setup a basic Flask app with a single route and an HTML template.
2. **Basic Babel Setup**: Install and configure the Babel Flask extension to support multiple languages.
3. **Get Locale from Request**: Create a function to detect user locale from request parameters.
4. **Parametrize Templates**: Use `_` or `gettext` function to parametrize templates for localization.
5. **Force Locale with URL Parameter**: Implement a way to force a particular locale by passing the `locale` parameter to app's URLs.
6. **Mock Logging In**: Implement mock user login system to emulate a similar behavior for displaying localized content.
7. **Use User Locale**: Change the locale detection logic to use a user's preferred locale if supported.
8. **Infer Appropriate Time Zone**: Define a function to infer the appropriate time zone based on user settings or request parameters.
9. **Display Current Time**: Display the current time on the home page in the default format based on the inferred time zone.

## Resources

- [Flask-Babel](https://pythonhosted.org/Flask-Babel/)
- [Flask i18n Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xiii-i18n-and-l10n)
- [pytz Documentation](https://pypi.org/project/pytz/)

## License

This project is licensed under the terms of the [MIT License](LICENSE).
