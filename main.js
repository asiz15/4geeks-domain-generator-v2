document.addEventListener("DOMContentLoaded", function () {
    console.log('Dom loaded!')
    const pronouns = document.getElementById('pronouns')
    const adjectives = document.getElementById('adjectives')
    const nouns = document.getElementById('nouns')
    const extensions = document.getElementById('extensions')
    const trigger = document.getElementById('trigger')
    const domainsList = document.getElementById('posibleDomains')
    const results = document.getElementById('results')


    pronouns.addEventListener('input', function (e) {
        results.style.display = 'none'
        e.target.value = e.target.value.replace(/\s/g, "").replace(/\./g, "");
    })
    adjectives.addEventListener('input', function (e) {
        results.style.display = 'none'
        e.target.value = e.target.value.replace(/\s/g, "").replace(/\./g, "");
    })
    nouns.addEventListener('input', function (e) {
        results.style.display = 'none'
        e.target.value = e.target.value.replace(/\s/g, "").replace(/\./g, "");
    })
    extensions.addEventListener('input', function (e) {
        results.style.display = 'none'
        e.target.value = e.target.value.replace(/\s/g, "").replace(/\./g, "");
    })

    trigger.addEventListener('click', function (e) {
        results.style.display = 'flex'
        results.style.flexDirection = 'column'
        const pronounsArr = pronouns.value.split(',')
        const adjectivesArr = adjectives.value.split(',')
        const nounsArr = nouns.value.split(',')
        const extensionsArr = extensions.value.split(',')

        const domains = generateDomains(pronounsArr, adjectivesArr, nounsArr, extensionsArr)

        domains.forEach((domain, index) => {

            domainsList.insertAdjacentHTML('beforeend', `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="display-6">${domain}</span>
            <a target="_blank" href="https://www.domain.com/registration/?flow=domainDFE&search=${domain}#/domainDFE/1" class="link-primary">check availability
            </a>
         </li>`)

        })
    })


    function generateDomains(pronouns, adjs, nouns, extensions) {
        const domains = []
        pronouns.forEach(pronoun => {
            adjs.forEach(adj => {
                nouns.forEach(noun => {
                    extensions.forEach(extension => {
                        let domain = noun.endsWith(extension) ? pronoun + adj + noun.split(extension)[0] + '.' + extension : pronoun + adj + noun + '.' + extension
                        domains.push(domain)
                    })
                })
            })
        })

        return domains
    }


});