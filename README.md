
# OpenModal
Open Modal is a pure Js module, which uses the [animate.css](https://animate.style/) library to create the modal effects.

### install 

```bash

  npm install open-modal

```
### How to use?

To use Open Modal you need to have animate.css installed in your application, go to https://animate.style/ to configure it, then initialize Open Modal like this.

```js
import OpenModal  from "./dist/open-modal.js"

const openModal = new OpenModal()

openModal.init()
``` 

After the Open modal is initialized, you will need a button with a defined ID that by default works with the ID "showModal", and you will also need a modal window with a css class to hide and show the modal elements, this class could be the class [".hide"](https://materializecss.com/helpers.html#hiding) of [materialize.css](https://materializecss.com/helpers.html#hiding)
or the ['.d-none"](https://getbootstrap.com/docs/5.3/utilities/display/#hiding-elements) class from [bootstrap](https://getbootstrap.com/docs/5.3/utilities/display/#hiding-elements), or you can define your own class to hide/show the modal elements.
You will need a Container div with the class ".open-modal" defined, or a class of its own defined in the cotainer, and a div with a class defined as modal-content, this step is important to activate the effects.

#### OBS
If you want to use the project's css, there is an open-modal css file in the same folder as the module


##### button code example
```xhtml
<button id="showModal" class="btn"> show modal</button>
```
##### Modal code example
```xhtml
    <div id="modal1" class="open-modal hide">
    <div class="modal-content">
        <div class="modal-body">
            <h4>Modal Header</h4>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </div>
        <div class="modal-footer">
            <button id="cancelButton" class="btn-materialize">disAgree</button>
            <button  class="btn-materialize">Agree</button>
        </div>
    </div>
</div>

```
#### Open Modal Options

It is possible to configure some options to change the way Open Modal works, the configurable options are passed to the class constructor 
as a literal object

### Exemple
```js
import OpenModal  from "./dist/open-modal.js"

const openModal = new OpenModal({
    optionKey1: "optionValue1",
    optionKey2: "optionValue2",
})

openModal.init()


```
 ### Options and standards values
```js
   let options = {
            btnShowId : "showModal",            
            btnCancelId : "cancelButton",
            containerClass : 'open-modal',
            contentClass : 'modal-content',
            hideClass : 'hide',
            containerBackground : false,
            containerEffects : false,
            contentEffects : false,
  }
```

| ---                 | **_Options_**      | ---                                                                                                                                             |
|---------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Option key**      | **Standard value** | **Option value description**                                                                                                                    | 
| btnShowId           | "showModal"        | Receives the id of the button responsible for opening the modal using the click event.                                                          |
| btnCancelId         | "cancelButton"     | Receives the id of the button responsible for closing the modal                                                                                 |
| containerClass      | "open-modal"       | Receives the Class of the modal container                                                                                                       |
| contentClass        | 'modal-content'    | Receives the Class of the div in which the content is located                                                                                   |
| hideClass           | "hide"             | This css class that hides the elements, this class is applied together with the '.open-modal" class                                             |
| containerBackground | false              | this value receives the Rgb or Exadecimal code for a color,                                                                                     |
| containerEffects    | false              | This Key returns an array as values containing the classes necessary to activate the effects in the container div using the animate.css library |
| contentEffects      | false              | This Key returns an array as values containing the classes necessary to activate the effects in the content div using the animate.css library   |

### Exemple of containerEffects & contentEffects

```js
import OpenModal  from "./dist/open-modal.js";

const openModal = new OpenModal(
    {
        btnShowId:'botaoMostrar',
        containerBackground: "rgba(19, 247, 15, 0.471)",
        containerEffects:{
            containerInEffects:['animate__animated','animate__fadeInDown'],
            containerOutEffects:['animate__animated', 'animate__bounceOutUp']
        },
        contentEffects:{
            contentInEffects: ['animate__animated','animate__fadeInDown'],
            contentOutEffects: ['animate__animated','animate__bounceOutUp'],
        },


    }
)

openModal.init()

```

## OBS:

### If you decide to change the ID's of the container and content you will have to change your css, as changing their names will undo the references to the open-modal.css file, or you can change the names and use Tailwindcss, materializecss, Bootstrap if you prefer.