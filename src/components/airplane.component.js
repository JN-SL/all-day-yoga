var template = `
    <div class="airplane-component">
        <img src="src/images/airplane-banner.svg" class="airplane" />
        <b class="message">{{message}}</b>
        
    </div>
`;

Vue.component('airplane', {
    data: function(){
        return {
            template: template
        }
    },
    props: ['message'],
    computed: {
        selectInit: function() {
            
        }
    },
    template: template
});