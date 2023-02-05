import os

components = os.listdir("./docs/guide/vue")
pages = os.listdir("./docs/guide/pages")

canCreate = True
filesCreated = False

for component in components:
    name_component = component[1:][:-4]
    canCreate = True

    for page in pages:
        if (name_component == page[:-3] and component[:1] == "H"):
            canCreate = False

    if (canCreate):
           template = f"""
           <script setup>
           import {name_component} from '../vue/{name_component}.vue'
           import HTag from '../vue/HTag.vue'
           </script>

           # Component: {name_component}

           ::: danger
           Please, add information about this component.
           :::

           Description

           <HTag type="error" style="width: 150px; margin-top:10px;">Planned</HTag>

           ## Props

           | Name | Type                   | Default | Description              |
           |------|------------------------|---------|--------------------------|
           | type | <code>Type here</code> | false   | Here is Description      |

           - Code

           ```vue
           <template>
             <H{name_component}></H{name_component}>
           </template>
           ```

           - Result

           <div style="display: flex; flex-direction: column; gap: 5px;">
               <H{name_component}></H{name_component}>
           </div>
           """
           with open(f'./docs/guide/pages/{name_component}.md', 'w') as f:
               filesCreated = True
               f.writelines(template.split('           '))
               print(f'{{text: "{name_component}", link: "/guide/pages/{name_component}"}},')
               f.close()

if (filesCreated):
    print('\nAdd this into docs/.vitepress/config.js. In code: themeConfig/sidebar/components/items :)\n')
else:
    print('\nNothing to add. Please create some components in docs/guide/vue\nName of components should starts with: H[name].vue\n')