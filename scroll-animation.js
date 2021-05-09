document.addEventListener('DOMContentLoaded', (e)=>{
    let gtbsa = new GTBScrollAnimator();
});

class GTBScrollAnimator{
    constructor(){
        this.elements = Array.from(document.querySelectorAll('[data-scroll-animate]'));
        this.elements.forEach((e)=>{
            e.style.opacity = 0;
            if(e.getAttribute('data-scroll-animate') == "from-left"){
                e.style.transform = 'scale(0,0) translateX(-100%)';
			}
            if(e.getAttribute('data-scroll-animate') == "from-right"){
                e.style.transform = 'scale(0,0) translateX(100%)';
			}
            e.style.transition = "all 5s ease";
		});
        window.addEventListener('scroll', (e)=>{
            this.checkElements();
		});
        window.requestAnimationFrame(()=>{
			window.requestAnimationFrame(()=>{
				this.checkElements();
			});
		});
	}
	
    checkElements(){
        this.elements = Array.from(document.querySelectorAll('[data-scroll-animate]'));
        this.elements.forEach((e)=>{
            let elementBottom = e.getBoundingClientRect().top+window.pageYOffset+ 0.5*e.clientHeight;
            let windowHeight = document.documentElement.clientHeight|| window.innerHeight;
            let bottomOfPage = window.pageYOffset + windowHeight;
            if((bottomOfPage) >= elementBottom && e.style.opacity == 0){
                window.requestAnimationFrame(()=>{
                    window.requestAnimationFrame(()=>{
                        e.style.opacity = 1;
                        if(e.getAttribute('data-scroll-animate') == "from-left"){
                            e.style.transform = 'scale(1,1) translateX(0)';
						}
                        if(e.getAttribute('data-scroll-animate') == "from-right"){
                            e.style.transform = 'scale(1,1) translateX(0)';
						}
					});
				});
			}
            if((bottomOfPage) < elementBottom && e.style.opacity == 1){
                window.requestAnimationFrame(()=>{
                    window.requestAnimationFrame(()=>{
                        e.style.opacity = 0;
                        if(e.getAttribute('data-scroll-animate') == "from-left"){
                            e.style.transform = 'scale(0,0) translateX(-100%)';
						}
                        if(e.getAttribute('data-scroll-animate') == "from-right"){
                            e.style.transform = 'scale(0,0) translateX(100%)';
						}
					});
				});
			}
		});
	}
}
