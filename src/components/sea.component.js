var template = `
    <div class="sea-component">
        <img src="src/images/wave-back.svg" class="waveBack" />
        
        <div class="yachtingPos">
            <img src="src/images/yachting.svg" class="yachtingRot">
        </div>
        
        <img src="src/images/wave-front.svg" class="waveFront" />
        
    </div>
`;

Vue.component('sea', {
    data: function(){
        return {
            template: template
        }
    },
    computed: {
        selectInit: function() {
            
        }
    },
    template: template
});