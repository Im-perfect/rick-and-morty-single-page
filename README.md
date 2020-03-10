## Rick and Morty Challenge

Responsive single page app made with React

This project is using the API: https://rickandmortyapi.com/

### Features
- Show all characters that exist (or are last seen) in a given dimension
- Show all characters that exist (or are last seen) at a given location
- Show all characters that partake in a given episode
- Showing all information of a character (Name, species, gender, last location, dimension, etc, WIP: information about which episodes a character is in)

### Improvements
- Navigation - Use NavLink instead of Link
- Use StyledComponents
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