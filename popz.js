
const popzbody = document.querySelector('body')
const messege_container = document.createElement('div')//messege main wrapper

// console.log(popzbody);
function popz(params) {
    // changing underline color
    function lineColor() {
        if (params.type == undefined) {
            return '#444'
        }
        if (params.type == 'error') {
            return 'red'
        }
        if (params.type == 'warning') {
            return 'rgb(124, 124, 3)'
        }
        if (params.type == 'success') {
            return ' rgb(17, 110, 17)'
        }
        if (params.type == 'info') {
            return ' rgb(235, 233, 250)'
        }

    }

    // remove the popup by clicking on in
    function castomizePopup() {
        var change_type_container = document.querySelector('.popz_container')
        const popz_container = document.querySelector('.popz_container')
        popz_container.addEventListener('click', () => {
            popz_container.classList.add('dispay_none')

        })
        setTimeout(() => {
            popz_container.classList.add('dispay_none')

        }, 30000)

        // cheching for the type of messege
        if (params.type == 'success') {
            change_type_container.classList.add('popz_success')

        }

        // cheching for the type of messege
        if (params.type == 'info') {
            change_type_container.classList.add('popz_info')

        }
        // cheching for the type of messege
        if (params.type == 'error') {
            change_type_container.classList.add('popz_error')

        }
        // cheching for the type of messege
        if (params.type == 'warning') {
            change_type_container.classList.add('popz_warning')

        }
        // cheching for the type of messege
        if (params.type == undefined) {
            change_type_container.classList.add('popz_default')

        }

        if (params.customClasss != undefined) {
            let customClasss = params.customClasss;
            change_type_container.classList.add(customClasss)
        }
    }


    // ***************working with error****
    // function for poping up messege at the top left animation_top_right
    function popzTopLeft() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
    <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_top_left">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the top right
    function popzTopRight() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_top_right">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the right 
    function popzRight() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_right">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the bottom right 
    function popzBottomRight() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_bottom_right">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the bottom right 
    function popzBottom() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_bottom">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the bottom left 
    function popzBottomLeft() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_bottom_left">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the left 
    function popzLeft() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_left">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the center 
    function popzCenter() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper   remove_popz ">
        <div class="popz_container animation_center">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }

    // function for poping up messege at the top 
    function popzTop() {
        messege_container.setAttribute('class', 'change_display')
        popzbody.appendChild(messege_container)
        messege_container.innerHTML = `
        <div class="popz_wrapper remove_popz ">
        <div class="popz_container animation_top">
            <h5 class="messege">${params.title != undefined ? params.title : ''}</h5>
            ${params.title != undefined ? `<hr style="background-color:${lineColor()};height: 1px;border: none;">` : ''}
            <div class="messege">${params.body != undefined ? params.body : ''}</div>
        </div>
    </div>
    `
        castomizePopup()
    }


    // --------------returning different error function----------------------------
    if (params.pos == undefined) {
        return popzTopRight()
    }
    if (params.pos == 'top-left') {
        return popzTopLeft()
    }

    // returning different function
    if (params.pos == 'top-right') {
        return popzTopRight()
    }

    // returning different function
    if (params.pos == 'right') {
        return popzRight()
    }

    // returning different function
    if (params.pos == 'bottom-right') {
        return popzBottomRight()
    }

    // returning different function
    if (params.pos == 'bottom') {
        return popzBottom()
    }

    // returning different function
    if (params.pos == 'bottom-left') {
        return popzBottomLeft()
    }

    // returning different function
    if (params.pos == 'left') {
        return popzLeft()
    }

    // returning different function
    if (params.pos == 'center') {
        return popzCenter()
    }

    // returning different function
    if (params.pos == 'top') {
        return popzTop()
    }

}



