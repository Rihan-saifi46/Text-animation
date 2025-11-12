gsap.registerPlugin(SplitText)

let split = SplitText.create(".text",{
  type:"words , chars , lines"
})

gsap.from(split.words,{
    y:100,
    autoAlpha:0,
    stagger:0.05
})