const app = document.getElementById('app')
const btn = document.getElementById('btnIniciar')
const load = document.getElementById('load')
const reload = document.getElementById('recargarWeb')



let contenido = ""


async function api(){

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/')
    const data = await respuesta.json()
    data.map(user => {
        contenido += `
        <div class="col-md-6 d-block mx-auto mt-5 mb-5">
        <div class="accordion rounded" id="accordionExample" style="box-shadow:0px 0px 6px #000;">
            <div class="accordion-item">
                <h3 class="text-center pt-3">User ${user.id}</h3>
                <h4 class="ps-3"><b>Name:</b> ${user.name}</h4>
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne${user.id}" aria-expanded="true" aria-controls="collapseOne">
                        Contact
                    </button>
                </h2>
                <div id="collapseOne${user.id}" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p><b>Email:</b> ${user.email} </p>
                        <p><b>Phone:</b> ${user.phone} </p>
                        <p><b>WebSite:</b> ${user.website} </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo${user.id}" aria-expanded="false" aria-controls="collapseTwo">
                        Company 
                    </button>
                </h2>
                <div id="collapseTwo${user.id}" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p><b>Name:</b> ${user.company.name} </p>
                        <p><b>CatchPhrase:</b> ${user.company.catchPhrase} </p>
                        <p><b>Bs:</b> ${user.company.bs} </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree${user.id}" aria-expanded="false" aria-controls="collapseThree">
                        Address
                    </button>
                </h2>
                <div id="collapseThree${user.id}" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p><b>Street:</b> ${user.address.street}</p>
                        <p><b>Suite:</b> ${user.address.suite}</p>
                        <p><b>City:</b> ${user.address.city}</p>
                        <p><b>ZipCode:</b> ${user.address.zipcode} </p>
                        <p><b>Geo lat:</b> ${user.address.geo.lat}  </p>
                        <p><b>Geo lng:</b> ${user.address.geo.lng} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `

        app.innerHTML = contenido;
    })
}


function loader() {
    load.classList.remove('invisible')
}

function loaderOff(){
    load.classList.add('invisible')
}

function timeLoad(){
    setTimeout(() => loaderOff(), 3000)
}

function mostrarApi() {
    
    setTimeout (() => api(), 3000)

}





btn.addEventListener('click', loader)
btn.addEventListener('click', mostrarApi)
btn.addEventListener('click', timeLoad)








