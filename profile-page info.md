Layout

Header 
- Logo 
- Search ( behaviour )
- Notification
- Menu ( behaviour )

Main content - Dashboard
- Sidebar
  - Profile image + Data
  - Menu
- Content
  -  Race participated info 
  - Race drill down
    - Race Time Graph ( behaviour - JS lib )
    - Race Time Info 

Footer 
- Link


Main content : Profile Info
// how will the user save info?
- Sidebar
  - Profile image + Data ( Behaviour - file upload )
  - Menu
- Content
  - Race participated info 
  - Personal Details
    - Personal Info Graph ( behaviour )
    - Personal Billing Info ( behaviour )
  - Card Layout x 4


Main content : Medical Info
- Sidebar
  - Profile image + Data ( Behaviour? )
  - Menu
- Content
  - Race participated info 
  - Personal Details
    - Medical Info ( behaviour )
    - Emergency Contact Info ( behaviour )
  - Card Layout x 2

Main content : Activities
- Sidebar
  - Profile image + Data ( Behaviour? )
  - Menu
- Content
  - Race participated info 
  - Race Details
    - Upcoming Races
    - Past Races over view 
  - Timeline 
    - Cards Layout x 2 ( behaviour )


# Layout components
- race participation component
- form element: label/value
- 2 col card layout
- Card layout type 1
  - icon + header
  - label by value
- Card layout type 2 ( timeline )  
  - Header image
  - Title
  - label by value
  - buttons

# Guide
- Only 2 devices are in consideration: desktop, mobile
- Desktop resolution
  - 1024+
- Mobile resolution
  - 320 to 580
- Browser Support
  - Chrome latest
  - Firefox latest
- Layout
  - Fixed width Centered layout ( 1200 )
- Testing
  - Use chrome dev tools for mobile view
- libraries
  - bootstrap ( grids, responsive, widgets )
  - jQuery

# Questions

- When can we expect mobile UX design?
- When should search trigger ?2 
- When search is triggered, how will it appear ? ( width of the search )
- How should the notification icon behave with zero notification?
- How should the 'menu' icon at the top right corner of the page behave?
- 'Edit Picture' and 'Edit Profile': Is this applicable applicable for all pages or is it just 'Profile information' page
- Is 'More' icon in dashboard page, a link?
- 'Personal Information' page, should the 'Edit Icon' be visible at all times?
- 'Personal Information' page: when user is in edit view, where does 'Save icon' show up?
- 'Timeline Activity': how does the 'view certificate' button behave?
- when title or content text overflows its container, it will be truncated to ellipses
