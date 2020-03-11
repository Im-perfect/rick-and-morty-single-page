[![Netlify Status](https://api.netlify.com/api/v1/badges/391cd83f-415a-442c-8d8f-0031be1f2a53/deploy-status)](https://app.netlify.com/sites/wonderful-heyrovsky-a953b1/deploys)

## Rick and Morty Challenge

Responsive single page app made with React => [Deploy](https://wonderful-heyrovsky-a953b1.netlify.com/) :link:

This project is using the API: https://rickandmortyapi.com/

### Features
- Show all characters that exist (or are last seen) in a given dimension
- Show all characters that exist (or are last seen) at a given location
- Show all characters that partake in a given episode
- Showing all information of a character (Name, species, gender, last location, dimension, etc, WIP: information about which episodes a character is in)

### Improvements
- Add search feature
- Navigation - Use NavLink instead of Link - Done :thumbsup:
- Use StyledComponents - Partly done -> Navigation and pagination are using SC :nail_care:
- Use Sass & BEM
    ```javascript
    .card {
        &__image {
            ...
        }

        &__title {
            ...
        }
    }
    ```
- Improve files/components/functions naming
