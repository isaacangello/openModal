import OpenModal  from "./dist/open-modal.js";

const openModal = new OpenModal(
    {
        btnShowId:'botaoMostrar',
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