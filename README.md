# ShowPets

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

---

## Overview

_**ShowPets** is an application where users will be able to show off their loving pets! Users will be able to add an image along with other information about their pets such as, name, age and a brief description. Users will be able to view all of the pets uploaded, however, they will be able to edit only their own posts._

[🔝](#ShowPets)

---

## MVP

_The **ShowPets** will have an authentication and verification process which allows user to create and maintain their account. ShowPets will also implement full CRUD which allows users to Create, Update and Destroy their own pet posts. As well as the ability to Read (view) other pet posts. The schema for each pet posts will include: image, name, breed, age, and description._

[🔝](#ShowPets)

---

### Goals

- _Successful authentication._
- _Full CRUD._
- _Correct/specific routes._
- _An appropriate design and layout._
- _Properly working end product._

[🔝](#ShowPets)

---

### Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|   Library    | Description                                                           |
| :----------: | :-------------------------------------------------------------------- |
|    React     | _Will be used to create the front-end of the application._            |
| React Router | _Will be used to route and link certain components in the front-end._ |
|     Ruby     | _Can't use rails without Ruby._                                       |
|    Rails     | _Will be used to set up the back-end of the application._             |

[🔝](#ShowPets)

---

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

[🔝](#ShowPets)

---

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components.

[🔝](#ShowPets)

---

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like.

```structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

[🔝](#ShowPets)

---

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

[🔝](#ShowPets)

---

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

[🔝](#ShowPets)

---

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

[🔝](#ShowPets)

---

## Post-MVP

- _The ability for users to comment on other pet posts._
- _The ablitly for users to like a pet post._

[🔝](#ShowPets)

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

[🔝](#ShowPets)

---

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

[🔝](#ShowPets)
