***

> [!IMPORTANT]
> ### How to add a ***new Screen*** in Plus Ultra Model

> [!WARNING]
>  - There cannot be two elements of the menu, even if there is a parent and a child item (because routing)
1. Go to '/src/components'
2. Create a folder that will contain the main component that will be render in the page 
3. Add all files and folders you need with the components that makes up the page component 
4. It's recommended to write the Index.tsx file as the parent component that will be exported, the rest will be the sub-components  
5. Go to '/src/app/pages/' route
6. Add a new folder inside of the route
> [!WARNING]
> - Is important to write the name in lowercase
> - If the name of the route has spaces, put an underscore ( _ ) replacing the spaces 
7. Go to '/src/components/Menu/MenuItems.ts' file
> [!TIP]
>  - There is two lists: The first one is the main list of menu, the second is the bottom one, and the third is the no-display items. 
>  - The 'name' attribute is the display name on screen. It's recomend to write it capitalized
>  - The 'icons' field, is a variable, a map of icons in '/src/assets/icons/IconsMap.tsx'  
>  - If you want to add another icon, you need to insert it into the mentioned icons map    
>  - The 'nodes' are the children items of the menu, in case the item has more children, those have the same structure, recursively
>  - 'display' means the icon whether or not to be render (the page may exists, but the icon in the menu may not)
8. Add your new item to the list
9. Go to '/src/lang/es/Menu.ts'
10. You need to add the title of your Menu, in the exact way you did in step 4, the 'name' attribute
11. Add your translate name of the menu button

***
