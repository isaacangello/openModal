import OpenModal  from "./dist/open-modal.js";
/**
 * Populate select with effects
 */ const sL = document.querySelector("#select-effect")

    let effectsObj = fetch('lib/effects.json')
        .then(resp=>resp.json())
        .then(resp=>{
                // console.log(resp)
        for (let respKey in resp) {
            //console.info(`--${respKey}--`)
            sL.appendChild(new Option(respKey,resp))
        }
        return resp
    })
sL.addEventListener('change',function () {
    // let index = this.selectedIndex
    let text = this.options[this.selectedIndex].text

    // console.info(effectsObj[text][0])
    effectsObj.then(resp => {
            let{effectIn , effectOut } = resp[text]
            console.log(effectIn[0]+"/"+effectOut+"/"+resp[text].effectIn)
            let selectOpenModal = new OpenModal(
                {
                    btnShowId:'slEffect',
                    btnCancelId:'selectedBtnClose',
                    containerClass:'modal-selected',
                    contentClass:'modal-dialog-selected',
                    containerBackground: "rgba(190,197,192,0.5)",
                    contentEffects:{
                        contentInEffects: effectIn,
                        contentOutEffects: effectOut,
                    },
                }
            )
        selectOpenModal.init()
    })

})

/**
 * standard init
 */



const openModal = new OpenModal(
    {
                btnShowId:'botaoMostrar',
                containerBackground: "#05662a80",
                containerEffects:{
                    containerInEffects:['animate__animated','animate__bounceInUp'],
                    containerOutEffects:['animate__animated', 'animate__fadeOut']
                },
                contentEffects:{
                    contentInEffects: ['animate__animated','animate__bounceInUp'],
                    contentOutEffects: ['animate__animated','animate__bounceOutUp'],
                },
        }
)

openModal.init()

/**
 *  bootstrap similar init
 *
 */

const bootstrapModal = new OpenModal(
    {
            btnShowId:'bsShowModal',
            btnCancelId:'bsBtnClose',
            containerClass:'modal-bootstrap',
            contentClass:'modal-dialog',
            containerEffects:{
                containerInEffects:['animate__animated','animate__fadeIn'],
                containerOutEffects:['animate__animated', 'animate__fadeOut']
            },
            contentEffects:{
                contentInEffects: ['animate__animated','animate__fadeInDown'],
                contentOutEffects: ['animate__animated','animate__fadeOutUp'],
            },
        })
 bootstrapModal.init()

/**
 * initialize materialize modal example
 * @type {OpenModal}
 */
const materializeModal = new OpenModal(
    {
            btnShowId:'mtShowModal',
            btnCancelId:'btn-close',
            containerClass:'modal-materialize',
            contentClass:'modal-content-mt',
            containerEffects:{
                containerInEffects:['animate__animated','animate__fadeIn'],
                containerOutEffects:['animate__animated', 'animate__fadeOut']
            },
            contentEffects:{
                contentInEffects: ['animate__animated','animate__zoomIn'],
                contentOutEffects: ['animate__animated','animate__zoomOut'],
            },
        })
materializeModal.init()

const modernModal = new OpenModal(
    {
        btnShowId:'StdModal',
        btnCancelId:'ModernBtnClose',
        containerClass:'modal-modern',
        contentClass:'modal-dialog-modern',
        containerEffects:{
            containerInEffects:['animate__animated','animate__fadeIn'],
            containerOutEffects:['animate__animated', 'animate__zoomOut',"animate__delay-2s"]
        },
        contentEffects:{
            contentInEffects: ['animate__animated','animate__jackInTheBox'],
            contentOutEffects: ['animate__animated','animate__hinge'],
        },
    })
modernModal.init()