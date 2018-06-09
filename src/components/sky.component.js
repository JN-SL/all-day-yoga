var template = `
    <div class="sky-component">
        <div class="am6"></div>
        <div class="am9"></div>
        <div class="pm12"></div>
        <div class="pm3"></div>
        <div class="pm6"></div>
        <div class="pm9"></div>
        <div class="am0"></div>
        <div class="am3"></div>
        
        <div class="nightSky" v-if="nightSky"></div>
        
    </div>
`;

Vue.component('sky', {
    data: function(){
        return {
            template: template
        }
    },
    props: ['nightSky'],
    computed: {
        selectInit: function() {
            
        }
    },
    template: template
});