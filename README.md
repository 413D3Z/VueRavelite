<p align="center">
<a href="https://www.413d3z.com" target="_blank"><img src="https://avatars.githubusercontent.com/u/28901773?v=4" width="400"></a>
</p>

# Laravel 10 Vue 3 Vite 5

# I hate outdated boilerplates so I will make sure this is always upgraded to the latest Core Components, whatever you choose to add in thereafter is up to you

The project was created to save myself time for redoing the same things all over again when starting a new Laravel/Vue project.

The main goal of this project is to reduce code and make everything simpler for bootstrapping new projects. 

Remember Vite 5 required you to import components with the .vue extension. 

The project is built with the following components:

- Vue 3 / Pinia / VueRouter
- Vue 3 Composition API
- Vite 5
- Laravel Framework 11
- Tailwind
- ForkAwesome
- Media Library (by Spatie)
- Spatie Permissions
## ⚡️ How to install

Installation is simple. Just like your ordinary Laravel app.

1. `git clone`
2. `cd vueravelite`
3. `composer install`
4. `cp .env.example .env`
5. `php artisan key:generate`   
6. `npm install`
7. `npm run watch` (or if production `npm run build`)

## ⚡️ How it works

### ➡️ Theming

The project supports theming, you can set a global color for the application theme, it can be done in `tailwind.config.js`.

```js
module.exports = {
    // ...
    theme: {
        extend: {
            colors: {
                theme: colors.blue,
                danger: colors.red
            }
        }
    },
    //...
};
```

### ➡️ Authentication

The project ships with complete authentication boilerplate including:
- Login
- Register
- Forget Password
- Reset Password

### ➡️ Authorization

The project is configured to use [Bouncer](https://github.com/JosephSilber/bouncer) package for managing authorization across your routes. Authorization is important security subject, so please consult bouncer's package documentation.

### ➡️ Localization / i18n

The project supports localization / i18n, to translate the front-end use `lang/{code}/frontend.php` file.

### ➡️ Users CRUD 

For your convenience the project comes with complete `users` crud that includes examples of:

- List page with filters and pagination
- Edit/create pages with form for editing user that includes ajax based role search field

### ➡️ Structure

The front-end code is located in `resources/js`. The code is organized in different directories to make things more readable.

| Directory    | Description                           |
|--------------|---------------------------------------|
| views        | The home of views                     |
| + pages      | The home of the pages                 |
| + icons      | The home of the icons                 |
| + layouts    | The home of the global layouts        |
| + components | The home of the reusable components   |
| helpers      | The home of the helper utilites       |
| plugins      | The home of the plugins configuration |
| router       | The home of the router configuration  |
| services     | The home of the HTTP services         |
| stores       | The home of the Pinia stores          |
| stub         | The home of the static constants      |

### ➡️ Components

The project ships with the most useful components that are required for one application (no bullshit), including:

| Name      | Description                                                | Parameters                                                                                                                                                     | Events                                   | Location               |
|-----------|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|------------------------|
| Page      | The main page wrapper                                      | title, breadcrumbs (array), actions (array of actions on top), is-loading                                                                                      | n/a                                      | views/layouts          |
| Panel     | Panel wrapper for displaying panels into the pages         | title, is-loading, body-padding                                                                                                                                | n/a                                      | views/components       |
| Modal     | Modal wrapper for creating modals                          | is-showing, is-loading, show-close                                                                                                                             | @close                                   | views/components       |
| Form      | Form wrapper                                               | title, is-loading                                                                                                                                              | n/a                                      | views/components       |
| Table     | A custom table with sorting and pagination support         | headers (array), records (array), actions (array of row actions), sorting (object of keys with true/false), pagination: (object of Laravel pagination data)    | @page-changed, @action, $sort            | views/components       |
| Alert     | Alert component that pulls alrts from AlertStore           | n/a                                                                                                                                                            | n/a                                      | views/components       |
| Badge     | Component that displays highlighted text with background   | theme (success, info, warning, danger, error)                                                                                                                  | n/a                                      | views/components       |
| TextInput | Custom text field with type={text,..., textarea} support   | name, label, v-model, type (text,...,textarea, etc), show-label, required, disabled, placeholder                                                               | default                                  | views/components/input |
| FileInput | File input with custom button and multiple choices support | name, label, v-model, show-label, required, disabled, placeholder, multiple, accept                                                                            | default + @click, @error, @input, @clear | views/components/input |
| Dropdown  | Dropdown field with server side support                    | name, label, v-model, show-label, required, disabled, placeholder, multiple, server (endpoint), server-per-page (items per page), server-search-min-characters | default                                  | views/components/input |
| Button    | Button/Router link component                               | label, icon, theme (success, info, warning, danger, error), disabled, to (:to is router url, when specified the button is rendered as router-link)             | default                                  | views/components/input |
| Spinner   | Spinner icon used mostly for loading                       | text, text-new-line (whether to break the text under the spinner)                                                                                              | n/a                                      | views/components/icons |
| Icon      | Icon wrapper, currently uses fork awesome                  | name (the icon name without the fa- part)                                                                                                                      | n/a                                      | views/components/icons |
| Avatar    | Default Avatar icon                                        | n/a                                                                                                                                                            | n/a                                      | views/components/icons |

Note: Please always look in the components, this table does not show everything.

From here, you are on your own. Develop new pages, models, components, use professional IDE for development to improve your efficiency.



### ➡️ CORS

Please make sure you have APP_URL, SANCTUM_STATEFUL_DOMAINS and SESSION_DOMAIN set correctly in [.env]

#### Normal domain

```
APP_URL=http://413d3z.com

SANCTUM_STATEFUL_DOMAINS=413d3z.com
SESSION_DOMAIN=413d3z.com
```

#### Development if using Laragon

```
APP_URL=http://YOURFOLDERNAME.(Whatever you have set in Laragon .test  .local .muhahaha ??)

SANCTUM_STATEFUL_DOMAINS=YOURFOLDERNAME.(Whatever you have set in Laragon .test  .local .muhahaha ??)
SESSION_DOMAIN=YOURFOLDERNAME.(Whatever you have set in Laragon .test  .local .muhahaha ??)
```

## ⚡️ Contributions

Pull requests are welcome, feel free to contribute to this project.

## ⚡️ License

```
Copyright (C) 2024 413D3Z (https://413d3z.com)

This file is part of Laravel Vue Starter

Laravel Vue Starter is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
(at your option) any later version.

Laravel Vue Starter is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Laravel Vue Starter. If not, see <https://www.gnu.org/licenses/>.
```
