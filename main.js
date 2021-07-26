//various options that can be passed as an object to the new Glide instance
const glide_options = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    peek: {before: 0, after: 200},
    gap: 150,
    animationTimingFunc: 'ease-in-out',
    animationDuration: 800,
}

//instantiate the glider
const glide = new Glide('.glide', glide_options);

//a space to output the title, description of each glides dynamicallys
const myOutput = document.getElementById('output');
// created some content for grabbing, this can be done dynamically from the backend
const content = {
    slide_0 : {
        title: 'Kittie',
        description: "Hello I am a kittie"
    },
    slide_1: {
        title: 'Bubble',
        description: "Hello I am bubbles"
    },
    slide_2: {
        title: "Woman",
        description: "Hello I am a woman"
    }
}

//event listener on mount after and prev/next functions
//mount after runs when the page refreshes, i.e for the first slide index 0
//run executes each time previous/next button is clicked

glide.on(['mount.after', 'run'], function(){
    //grab the current index, i.e 0, 1,2 and so on, and concatenate that with the 'slide_' string to match the objects defined above
    let my_index = 'slide_'+glide.index;
    myOutput.innerHTML = `<h2>${content[my_index].title}</h2>
    <p>${content[my_index].description}</p>`;
})

//this mounts the glide into the browser, simple but extremely important
glide.mount();

// to grab the current glide index
console.log(glide.index); // e.g 0