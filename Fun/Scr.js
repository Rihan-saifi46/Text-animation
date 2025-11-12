gsap.registerPlugin(SplitText)

let split = SplitText.create(".text",{
  type:"words , chars , lines",
  wordsClass:"word"
})

gsap.from(split.chars,{
    // yPercent:"random([-150,150])",
    y:"random([-150,150])",

    // rotation:"random([-45,45])",
    autoAlpha:0,
    //   repeat:-1,
    //     yoyo:true,
        ease:"back.out",
    stagger:{
        amount:".5",
        from:"random",
        repeat:-1,
        yoyo:true
    }
})