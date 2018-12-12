var DLBTN = DLBTN || (function(){
    var _args = {}; // private
    var _settings = {
        hash: '',
        maxWidth: '100%',
        width: null
    };
    return {
        init : function(Args) {
            _args = Args;
            var i=0;
            for(var prop in _settings) {
                if(_settings.hasOwnProperty(prop)&&null != _args[i]) {
                    _settings[prop] = _args[i];
                }
                i++;
            }
            this.embed();
        },
        embed : function() {
            var a='e',b='m',c='b',d='e',e='d',f='f',g='i',h='l',i='e',j='https',k='net',l='embed',m='button';
            var iframe = document.createElement('iframe');
            iframe.src = j+'://'+a+b+c+d+e+f+g+h+i+'.'+k+'/'+l+'/'+m+'/'+_settings.hash;
            iframe.style.maxWidth = _settings.maxWidth;
            iframe.style.height = '54px';
            iframe.style.border = 0;
            iframe.style.overflow = 'hidden';
            if( null != _settings.width ) iframe.style.width = _settings.width;
            document.write(iframe.outerHTML);
        }
    };
}());