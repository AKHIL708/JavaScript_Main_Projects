window.addEventListener('load',()=>{

    let params = (new URL(document.location)).searchParams;
    const name = params.get('name')
    const email = params.get('email')
    const position = params.get('position')
    const phone = params.get('phone')
    const location = params.get('location')
    const twitter = params.get('twitter')
    const about = params.get('about')
    const work = params.get('work')
    const college = params.get('college')
    const institute = params.get('institute')
    const language = params.get('language')
    const skillOne = params.get('skillOne')
    const skillTwo = params.get('skillTwo')
    const skillThree = params.get('skillThree')
    const skillFour = params.get('skillFour')
    const skillFive = params.get('skillFive')
    const skillSix = params.get('skillSix')
    const skillSeven = params.get('skillSeven')
    const organisationOne = params.get('organisationOne')
    const organisationTwo = params.get('organisationTwo')
    const organisationThree = params.get('organisationThree')
    const awards = params.get('awards')


    document.getElementById("name").innerHTML = name
    document.getElementById("email").innerHTML = email
    document.getElementById("about").innerHTML = about
    document.getElementById("position").innerHTML = position
    document.getElementById("phone").innerHTML = phone
    document.getElementById("location").innerHTML = location
    document.getElementById("twitter").innerHTML = twitter
    document.getElementById("work").innerHTML = work
    document.getElementById("college").innerHTML = college
    document.getElementById("institute").innerHTML = institute
    document.getElementById("language").innerHTML = language
    document.getElementById("skillOne").innerHTML = skillOne
    document.getElementById("skillTwo").innerHTML = skillTwo
    document.getElementById("skillThree").innerHTML = skillThree
    document.getElementById("skillFour").innerHTML = skillFour
    document.getElementById("skillFive").innerHTML = skillFive
    document.getElementById("skillSix").innerHTML = skillSix
    document.getElementById("skillSeven").innerHTML = skillSeven
    document.getElementById("organisationOne").innerHTML = organisationOne
    document.getElementById("organisationTwo").innerHTML = organisationTwo
    document.getElementById("organisationThree").innerHTML = organisationThree
    document.getElementById("awards").innerHTML = awards
})


function Print(){
    window.print()
}
function Pink(){
    let body = document.getElementById("wraper")
    body.className = "Pink"
}
function Yellow(){
    let body = document.getElementById("wraper")
    body.className = "Yellow"
}
function Orange(){
    let body = document.getElementById("wraper")
    body.className = "Orange"
}
function Purple(){
    let body = document.getElementById("wraper")
    body.className = "Purple"
}
function Blue(){
    let body = document.getElementById("wraper")
    body.className = "Blue"
}