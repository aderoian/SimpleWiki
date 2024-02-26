# Simple Wiki
Simple Wiki aims to provide an easy way to create a multiple paged website to display information.

## Features
- Automatically covert markdown files to HTML
- Automatically generate a navigation bar
    - Search bar for files
- "Locked Mode" which requires a password to view the website

## Installation
### 1. Creating a Repository
Getting started with Simple Wiki is easy. First, select "Use this template" to create a new repository.
### 2. Configuring GitHub Pages
Navigate to the **settings** tab of your repository and scroll down to the ``Pages`` section. Under **Build and deployment**, select ``GitHub Actions`` from the dropdown.
### 3. Configuring the Environment
Navigate to the ``Environment`` section of your repository settings. Here you will add environment secrets and variables.

|                       |             |                                                                                                             |
|-----------------------|-------------|-------------------------------------------------------------------------------------------------------------|
| Name                  | Value       | Description                                                                                                 |
| ``VITE_APP_NAME``     | ``string``  | The name of your wiki. This will appear in the website title and above the navigation tree.                 |
| ``VITE_APP_PATH``     | ``string``  | This is the pat GitHub assigns to your page URL. Set this to the **exact** name of your repository.         |
| ``VITE_APP_LOCKED``   | ``boolean`` | Set this to ``true`` to enable locked mode. This will require a password to view the website.               |
| ``VITE_APP_PASSWORD`` | ``string``  | The password required to view the website. This is only required if ``VITE_APP_LOCKED`` is set to ``true``. |

### 4. Creating Pages
To create a page simple add a markdown file under the ``public/docs/`` directory. Use only lowercase characters and underscores to separate words in the file name. For example, ``my_first_page.md`` (the name will automatically be formatted).

The ``home.md`` page is required and acts as the landing page for the website.

### 5. Creating Categories
To create a category, simply create a directory under the ``public/docs/`` directory. Then, add markdown files to the directory. The directory name will be used as the category name. The formatting follows the same rules as a page.

### 6. Deployment
As soon as a new change is pushed to the repository, the website will be automatically updated. You can view the website by navigating to ``https://<username>.github.io/<repository>``.