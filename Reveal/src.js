document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(SplitText)

    let split = SplitText.create("p",{
        type:"lines,words,chars"
    })

    gsap.from(split.chars,{
        y:30,
        opacity:0,
        stagger:{
            each:0.1,
            from:"end"
        }
    })
})