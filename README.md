# Installation
```bash
$ npm install -save-dev react-typescript-ui-component-library
```

# Set Up instructions
You can create new react project using the typescript or you can use your existing react-typescript project <br>
```bash
$ npx install create-react-app --template typescript<br>
```

# Environment file
Create .env file in your root directory to resolve the sourcemap dependency issue and paste the below code <br>
***GENERATE_SOURCEMAP=false***

# Usage
```ts
import { Button, Input, Dropdown, Modal } from 'react-typescript-ui-component-library';

function App() {
    return (
        <div className="App">
         <Modal isOpen={true}></Modal>
         <Button label="Test" onClick={(e) => console.log(e.target)} style={{size: 'large'}}></Button>
         <Input type="email" placeholder="text" isValid={true} onChange={()=> {}}></Input>
         <Dropdown options={["sdf", "sdfsdf", "Sfsdf"]} selectedOption='sdfsdf'></Dropdown>
        </div>
    )
}

export default App;
```

# Button component optional properties
**label:** string<br>
**disabled:** boolean<br>
**style:** object <br>
  {<br>
    size?: "small" | "medium" | "large";<br>
    primary?: boolean;<br>
    primaryColor?: string;<br>
    secondaryColor?: string;<br>
    hoverPrimaryColor?: string;<br>
    hoverSecondaryColor?: string;<br>
  }<br>
**onClick:** MouseEventHandler<HTMLButtonElement> 

# Input component optional properties
**id:** string<br>
**type:** "text" | "number" | "email" <br>
**value:** string <br>
**isValid:** boolean <br>
**disabled:** boolean <br>
**placeholder:** string <br>
**onChange:** ChangeEventHandler<HTMLInputElement> <br>

# Dropdown component optional properties
**options:** string[] <br>
**selectedOption:** string <br>
**onSelect:** ReactEventHandler<HTMLSelectElement> <br>

# Modal component optional properties
**children:** string <br>
**isOpen:** boolean <br>
**onClose:** MouseEventHandler<HTMLButtonElement> <br>

# To run the package
1. Clone the repository
2. Install the dependencies with<br>
```bash 
$ npm install 
``` 
3. Build the components with <br>
```bash 
$ npm run build 
```
4. Run the tests with <br>
```bash 
$ npm run test
```

# Storybook UI
All the components are build in stories using Storybook. Every component includes a file ```*.stories.tsx``` with the possible inputs<br>
```bash
$ npm run storybook
```
This command will execute all the stories present inside all the components and will loaded on the ```localhost:6006``` port
