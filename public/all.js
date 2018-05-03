;var RCS = {
    templateCache: {}
};

(function (RCS) {
    /*
    var tpl = '<a>{{this.key1}} <p>-</p> {{this.value1.c}}</a>';
    var data = {"key1":1,"value1":{"c":"cccccc"}};
    var html = render(tpl,data);
    */
    function render(template, data) {
        template = template || "";
        data = data || [""];
        var re = /{%((?:(?!%}).)+)%}/g, reExp = /(^( )?(var|if|for|else|switch|case|default|break|{|}))(.*)?/g,
            code = 'var r=[];\n', cursor = 0;
        var add = function (line, js) {
            js ? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
        var match;
        while (match = re.exec(template)) {
            add(template.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(template.substr(cursor, template.length - cursor));
        code += 'return r.join("");';
        data = isNaN(data.length) ? [data] : data;
        var html = "";
        for (var i = 0, length = data.length; i < length; i++) {
            html += new Function(code.replace(/[\r\t\n]/g, '')).apply(data[i]);
        }


        var gg = html

        return html;
    }


    var utils = {
        $: function (selector) {
            return document.querySelectorAll(selector);
        },
        show: function (node) {
            node.style.display = "block";
        },
        hide: function (node) {
            node.style.display = "none";
        },
        removeNode: function (selector) {
            var thisNode = utils.$(selector)[0];
            if (thisNode) {
                thisNode.parentNode.removeChild(thisNode);
            }
        },
        getStyle: function (node, prop) {
            if (node.currentStyle) {
                return node.currentStyle[prop] || '';
            }
            else if (window.getComputedStyle) {
                return window.getComputedStyle(node, null)[prop];
            }
        },
        indexOf: function (array, item) {
            if (array.indexOf) {
                return array.indexOf(item);
            }
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === item) {
                    return i;
                }
            }
            return -1;
        },
        copy: function (json1, json2, flag, fn) {
            fn = fn || function (e) {
                return e;
            }
            for (var key in json2) {
                if (flag || typeof json1[key] === 'undefined' || json1[key] === null) {
                    json1[key] = fn(json2[key]);
                }
            }
            return json1;
        },
        isChild: function (node, nodeParent) {
            while (node && node.tagName && node.tagName.toLowerCase() != "body") {
                if (node == nodeParent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        },
        getTime: function (time) {
            var nowDate = new Date();
            var sendDate = new Date(time);
            var dateStr = '';
            if (nowDate.getFullYear() == sendDate.getFullYear() && nowDate.getMonth() == sendDate.getMonth() && nowDate.getDate() == sendDate.getDate()) {
                dateStr = (sendDate.getHours() > 9 ? sendDate.getHours() : '0' + sendDate.getHours()) + ':' + (sendDate.getMinutes() > 9 ? sendDate.getMinutes() : '0' + sendDate.getMinutes());
            } else {
                dateStr = sendDate.getFullYear() + '-' + (sendDate.getMonth() > 8 ? (sendDate.getMonth() + 1) : '0' + (sendDate.getMonth() + 1)) + '-' + (sendDate.getDate() > 9 ? sendDate.getDate() : '0' + sendDate.getDate()) + ' ' + (sendDate.getHours() > 9 ? sendDate.getHours() : '0' + sendDate.getHours()) + ':' + (sendDate.getMinutes() > 9 ? sendDate.getMinutes() : '0' + sendDate.getMinutes());
            }
            return dateStr;
        },
        getFileSize: function (size) {
            var g = Math.pow(1024, 3);
            var m = Math.pow(1024, 2);
            var k = Math.pow(1024, 1);
            if (size > g) {
                size = (size / g).toFixed(2) + 'G';
            } else if (size > m) {
                size = (size / m).toFixed(2) + 'M';
            } else if (size > k) {
                size = (size / k).toFixed(2) + 'K';
            } else {
                size = size + 'B';
            }
            return size;
        },
        getFormValue: function (formArray) {
            var formData = {};
            for (var i = 0; i < formArray.length; i++) {
                formData[formArray[i]] = document.getElementsByName(formArray[i])[0].value;
            }
            return formData;
        },
        fadein: function (ele) {
            ele.style.opacity = 0;
            ele.style.display = "block";
            if (ele) {
                var v = 0;
                var timer = null;
                timer = setInterval(function () {
                    v += 1;
                    setOpacity(ele, v);
                    if (v == 100) {
                        clearInterval(timer);
                    }
                }, 1);
            }
        },
        fadeout: function (ele) {
            if (ele) {
                var v = 100;
                var timer = null;
                timer = setInterval(function () {
                    v -= 1;
                    setOpacity(ele, v);
                    if (v == 0) {
                        ele.style.display = "none";
                        clearInterval(timer);
                    }
                }, 1);
            }
        },
        downloadHistoryMsgFile: function (url, name) {
            var a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', name || '');
            a.click();
        },
        encodeHtmlStr: function (str) {
            var replaceRule = [
                {
                    symbol: '&',
                    html: '&amp;'
                },
                //下述方法有问题,字符串中如有空格,会多加空格
                //white-space: pre-wrap; 能实现同样效果,并支持ie9, 故注释掉
                // {
                //     symbol: '[\\u0020]',
                //     html: '&nbsp;\u0020'
                // },
                {
                    symbol: '[\\u0009]',
                    html: '&nbsp;&nbsp;&nbsp;&nbsp;\u0020'
                },
                {
                    symbol: '<',
                    html: '&lt;'
                },
                {
                    symbol: '>',
                    html: '&gt;'
                },
                {
                    symbol: '"',
                    html: '&quot;'
                },
                {
                    symbol: '\'',
                    html: '&#39;'
                },
                {
                    symbol: '\\n\\r',
                    html: '<br/>'
                },
                {
                    symbol: '\\r\\n',
                    html: '<br/>'
                },
                {
                    symbol: '\\n',
                    html: '<br/>'
                }
            ];

            for (var i = 0, len = replaceRule.length; i < len; i++) {
                var rule = replaceRule[i];
                var regExp = new RegExp(rule.symbol, 'g');
                str = str.replace(regExp, rule.html);
            }

            return str;
        },
        replaceUri: function (str, callback) {
            var result = '';
            var protocol = '((?:http|https|ftp)\\:\\/\\/)?';
            var ip = '(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])';
            var host = '(?!@)(?:[a-z0-9-]{1,36}\\.)+[a-z]{2,6}';
            var port = '(?:\\:[0-9]{1,5})?';
            var path = '(?:[a-zA-Z0-9.,;?\\\'+&%$#=~_\\-!()*\\/]*)';
            var uriReg = new RegExp(protocol + '(?:(?:' + ip + ')|(?:' + host + '))' + port + path, 'ig');

            result = str.replace(uriReg, function (uriStr, prot) {
                var lastIndex = arguments[arguments.length - 2];
                var prevChar = str.substr(lastIndex - 1, 1);
                var isEmail = prevChar === '@';
                var notDomain = !chkDomain(uriStr, prot);
                if (isEmail || notDomain) {
                    return uriStr;
                }
                return callback.apply(null, arguments);
            });
            return result;
        },
        replaceEmail: function (str, callback) {
            var result = '';
            var emailReg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/gi;

            result = str.replace(emailReg, callback);

            return result;
        },
        cloneObj: function (obj) {
            var str, newobj = obj.constructor === Array ? [] : {};
            if (typeof obj !== 'object') {
                return;
            } else if (window.JSON) {
                str = JSON.stringify(obj), //系列化对象
                    newobj = JSON.parse(str); //还原
            } else {
                for (var i in obj) {
                    newobj[i] = typeof obj[i] === 'object' ?
                        cloneObj(obj[i]) : obj[i];
                }
            }
            return newobj;
        },
        //判断当前是否是移动端
        browserRedirect: function (callback) {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                callback("phone");
            } else {
                callback("pc");
            }
        }
    };
    var setOpacity = function (ele, opacity) {
        if (ele.style.opacity != undefined) {
            ///兼容FF和GG和新版本IE
            ele.style.opacity = opacity / 100;
        } else {
            ///兼容老版本ie
            ele.style.filter = "alpha(opacity=" + opacity + ")";
        }
    }

    var domainArray = [
        '.com', '.net', '.org', '.biz', '.coop', '.info', '.museum', '.name',
        '.pro', '.edu', '.gov', '.int', '.mil', '.ac', '.ad', '.ae', '.af', '.ag',
        '.ai', '.al', '.am', '.an', '.ao', '.aq', '.ar', '.as', '.at', '.au', '.aw',
        '.az', '.ba', '.bb', '.bd', '.be', '.bf', '.bg', '.bh', '.bi', '.bj', '.bm',
        '.bn', '.bo', '.br', '.bs', '.bt', '.bv', '.bw', '.by', '.bz', '.ca', '.cc',
        '.cd', '.cf', '.cg', '.ch', '.ci', '.ck', '.cl', '.cm', '.cn', '.co', '.cr',
        '.cu', '.cv', '.cx', '.cy', '.cz', '.de', '.dj', '.dk', '.dm', '.do', '.dz',
        '.ec', '.ee', '.eg', '.eh', '.er', '.es', '.et', '.fi', '.fj', '.fk', '.fm',
        '.fo', '.fr', '.ga', '.gd', '.ge', '.gf', '.gg', '.gh', '.gi', '.gl', '.gm',
        '.gn', '.gp', '.gq', '.gr', '.gs', '.gt', '.gu', '.gv', '.gy', '.hk', '.hm',
        '.hn', '.hr', '.ht', '.hu', '.id', '.ie', '.il', '.im', '.in', '.io', '.iq',
        '.ir', '.is', '.it', '.je', '.jm', '.jo', '.jp', '.ke', '.kg', '.kh', '.ki',
        '.km', '.kn', '.kp', '.kr', '.kw', '.ky', '.kz', '.la', '.lb', '.lc', '.li',
        '.lk', '.lr', '.ls', '.lt', '.lu', '.lv', '.ly', '.ma', '.mc', '.md', '.me',
        '.mh', '.mk', '.ml', '.mm', '.mn', '.mo', '.mp', '.mq', '.mr', '.ms', '.mt',
        '.mu', '.mv', '.mw', '.mx', '.my', '.mz', '.na', '.nc', '.ne', '.nf', '.ng',
        '.ni', '.nl', '.no', '.np', '.nr', '.nu', '.nz', '.om', '.pa', '.pe', '.pf',
        '.pg', '.ph', '.pk', '.pl', '.pm', '.pn', '.pr', '.ps', '.pt', '.pw', '.py',
        '.qa', '.re', '.ro', '.rw', '.ru', '.sa', '.sb', '.sc', '.sd', '.se', '.sg',
        '.sh', '.si', '.sj', '.sk', '.sl', '.sm', '.sn', '.so', '.sr', '.st', '.sv',
        '.sy', '.sz', '.tc', '.td', '.tf', '.tg', '.th', '.tj', '.tk', '.tm', '.tn',
        '.to', '.tp', '.tr', '.tt', '.tv', '.tw', '.tz', '.ua', '.ug', '.uk', '.um',
        '.us', '.uy', '.uz', '.va', '.vc', '.ve', '.vg', '.vi', '.vn', '.vu', '.ws',
        '.wf', '.ye', '.yt', '.yu', '.za', '.zm', '.zw', '.mg'];

    var getLocation = function (href) {
        var location = document.createElement('a');
        location.href = href;
        return location;
    };

    function ValidateIPaddress(ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        }
        return false;
    }

    var chkDomain = function (str, protocol) {
        var link = str;
        if (!protocol) {
            link = 'http://' + link;
        }
        var location = getLocation(link);
        if (ValidateIPaddress(location.hostname)) {
            return true;
        }
        var domain = location.hostname.replace(/^.+\./, '');
        if (domainArray.indexOf('.' + domain) < 0) {
            return false;
        }
        return true;
    };


    utils.render = render;

    RCS.utils = utils;
})(RCS);

(function (RCS) {
    //qiniu
    function forEach(m, callback) {
        for (var key in m) {
            callback(key, m[key]);
        }
    }

    function buildUrl(url, items) {
        var query = '';
        forEach(items, function (name, value) {
            if (name != 'token') {
                query += (query ? '&' : '') + encodeURIComponent(name) + '=' + encodeURIComponent(value);
            }
        });

        if (query) {
            url += (url.indexOf('?') > 0 ? '&' : '?') + query;
        }

        return url;
    }

    function encode2UTF8(argString) {
        if (argString === null || typeof argString === 'undefined') {
            return '';
        }
        var string = (argString + ''); // .replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        var utftext = '',
            start, end, stringl = 0;
        start = end = 0;
        stringl = string.length;
        for (var n = 0; n < stringl; n++) {
            var c1 = string.charCodeAt(n);
            var enc = null;

            if (c1 < 128) {
                end++;
            } else if (c1 > 127 && c1 < 2048) {
                enc = String.fromCharCode(
                    (c1 >> 6) | 192, (c1 & 63) | 128
                );
            } else if (c1 & 0xF800 ^ 0xD800 > 0) {
                enc = String.fromCharCode(
                    (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                );
            } else { // surrogate pairs
                if (c1 & 0xFC00 ^ 0xD800 > 0) {
                    throw new RangeError('Unmatched trail surrogate at ' + n);
                }
                var c2 = string.charCodeAt(++n);
                if (c2 & 0xFC00 ^ 0xDC00 > 0) {
                    throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
                }
                c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
                enc = String.fromCharCode(
                    (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
                );
            }
            if (enc !== null) {
                if (end > start) {
                    utftext += string.slice(start, end);
                }
                utftext += enc;
                start = end = n + 1;
            }
        }

        if (end > start) {
            utftext += string.slice(start, stringl);
        }

        return utftext;
    }

    // Copy 七牛 SDK 方法
    function encode2Base64(data) {
        var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
            ac = 0,
            enc = '',
            tmp_arr = [];

        if (!data) {
            return data;
        }

        data = encode2UTF8(data + '');

        do { // pack three octets into four hexets
            o1 = data.charCodeAt(i++);
            o2 = data.charCodeAt(i++);
            o3 = data.charCodeAt(i++);

            bits = o1 << 16 | o2 << 8 | o3;

            h1 = bits >> 18 & 0x3f;
            h2 = bits >> 12 & 0x3f;
            h3 = bits >> 6 & 0x3f;
            h4 = bits & 0x3f;

            // use hexets to index into b64, and append result to encoded string
            tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
        } while (i < data.length);

        enc = tmp_arr.join('');

        switch (data.length % 3) {
            case 1:
                enc = enc.slice(0, -2) + '==';
                break;
            case 2:
                enc = enc.slice(0, -1) + '=';
                break;
        }
        return enc;
    }

    // Copy 七牛 SDK 方法
    function URLSafeBase64Encode(v) {
        v = encode2Base64(v);
        return v.replace(/\//g, '_').replace(/\+/g, '-');
    }

    function chunkLastStep(data, opts, callback) {
        // 七牛 URL 规定
        var key = '/key/' + URLSafeBase64Encode(data.filename);
        var fname = '/fname/' + URLSafeBase64Encode(data.filename);
        var url = opts.domain + '/mkfile/' + data.size + key + fname;
        var options = {
            domain: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/octet-stream'
            },
            multi_parmas: opts.multi_parmas,
            support_options: true,
            stream: true
        };
        uploadData(data.ctx, options, {
            onCompleted: function (res) {
                res.filename = data.filename;
                res.name = data.name;
                callback.onCompleted(res);
            },
            onError: function () {
                throw new Error('qiniu uploadChunk error');
            },
            onProgress: function (chunkLoaded, total) {
            },
            onOpen: function (xhr) {
                callback.onOpen(xhr);
            }
        });
    }

    var offset = 0,
        ctxStore = {};

    function uploadNextChunk(blob, opts, callback) {
        var chunk = Math.ceil(offset / opts.chunk_size),
            chunks = Math.ceil(blob.size / opts.chunk_size),
            curChunkSize = Math.min(opts.chunk_size, blob.size - offset),
            chunkBlob = blob.slice(offset, offset + curChunkSize),
            chunkInfo = {
                chunk: chunk,
                chunks: chunks,
                name: blob.uniqueName
            };
        forEach(chunkInfo, function (key, value) {
            opts.multi_parmas[key] = value;
        });
        opts.filesize = blob.size;
        opts.headers = {
            'Content-Type': 'application/octet-stream'
        };
        opts.isChunk = true;
        uploadData(chunkBlob, opts, {
            onCompleted: function (chunkRes) {
                offset += curChunkSize;
                // callback.onProgress(Math.floor((chunk + 1) / chunks * blob.size), blob.size);
                ctxStore[blob.uniqueName] = ctxStore[blob.uniqueName] || [];
                ctxStore[blob.uniqueName].push(chunkRes.ctx);
                if (offset < blob.size) {
                    if (chunkRes.ctx) {
                        uploadNextChunk(blob, opts, callback);
                    } else {
                        offset = 0;
                        delete ctxStore[blob.uniqueName]
                    }
                } else {
                    offset = 0;
                    delete opts.isChunk;
                    delete opts.headers['Content-Type'];
                    forEach(chunkInfo, function (key, value) {
                        delete opts.multi_parmas[key];
                    });
                    var ctx = ctxStore[blob.uniqueName].join(',');
                    var data = {
                        ctx: ctx,
                        name: blob.name,
                        size: blob.size,
                        filename: blob.uniqueName
                    };
                    chunkLastStep(data, opts, callback);
                }
            },
            onError: function () {
                throw new Error('qiniu uploadChunk error');
            },
            onProgress: function (chunkLoaded, total) {
                var loaded = chunkLoaded + offset;
                callback.onProgress(loaded, opts.filesize);
            },
            onOpen: function (xhr) {
                callback.onOpen(xhr);
            }
        });
    }

    function uploadData(data, options, callback) {
        var xhr = new XMLHttpRequest();
        if (xhr.upload && options.support_options) {
            xhr.upload.onprogress = function (event) {
                callback.onProgress(event.loaded, event.total);
            };
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var result = xhr.responseText || "{}";
                result = JSON.parse(result);
                result.filename = options.unique_value;
                callback.onCompleted(result);
            }
        };

        var url = options.domain;
        if (options.isChunk) {
            url += '/mkblk/' + data.size;
            url = buildUrl(url, options.multi_parmas);
        }
        xhr.open(options.method, url, true);

        callback.onOpen(xhr);

        if (options.stream) {
            xhr.setRequestHeader('authorization', 'UpToken ' + options.multi_parmas.token);
        }

        forEach(options.headers, function (key, value) {
            xhr.setRequestHeader(key, value);
        });
        xhr.send(data);
    }

    function uploadQiniu(file, opts, callback) {
        if (file.size && opts.chunk_size < file.size) {
            var uniqueName = opts['genUId'](file);
            var suffix = file.name.substr(file.name.lastIndexOf('.'));
            uniqueName = uniqueName + suffix;
            file.uniqueName = uniqueName;
            opts.stream = true;
            uploadNextChunk(file, opts, callback);
        } else {
            var data = opts['data'](file, opts);
            uploadData(data, opts, callback);
        }
    }

    var uploadProcess = uploadQiniu;


    //upload
    var dataType = {
        form: getFormData,
        json: getJsonData,
        data: getData
    };
    var fileConfig = {
        domain: 'http://upload.qiniu.com',
        fileType: RongIMLib.FileType.IMAGE,
        getToken: function (callback) {
            /****************************
             * 使用融云文件存储注意事项：
             * 1、有效期为 1 个月。
             * 2、文件不可迁移。
             ****************************
             */
            RongIMClient.getInstance().getFileToken(this.fileType, {
                onSuccess: function (data) {
                    callback(data.token);
                },
                onError: function (error) {
                    console.log('获取上传token失败');
                    console.log(error);
                }
            });
        }
    };

    function genUId() {
        var date = new Date().getTime();
        var uuid = 'xxxxxx4xxxyxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(date / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    function mergeOption(opts) {
        var options = {
            domain: '',
            method: 'POST',
            file_data_name: 'file',
            unique_key: 'key',
            base64_size: 4 * 1024 * 1024,
            chunk_size: 4 * 1024 * 1024,
            headers: {},
            multi_parmas: {},
            query: {},
            support_options: true,
            data: dataType.form,
            genUId: genUId
        };
        if (!opts || !opts.domain) {
            throw new Error('domain is null');
        }
        for (var key in opts) {
            options[key] = opts[key];
        }
        return options;
    }

    function mEach(m, callback) {
        for (var key in m) {
            callback(key, m[key]);
        }
    }

    function getFormData(file, opts) {
        var form = new FormData();
        if (opts.unique_key) {
            var suffix = file.name.substr(file.name.lastIndexOf('.'));
            var unique_value = genUId() + suffix;
            form.append(opts.unique_key, unique_value);
            opts.unique_value = unique_value;
        }
        form.append(opts.file_data_name, file);
        mEach(opts.multi_parmas, function (key, value) {
            form.append(key, value);
        });
        return form;
    }

    function getJsonData(file, opts) {
        var data = {};
        if (opts.unique_key) {
            var suffix = file.name.substr(file.name.lastIndexOf('.'));
            var unique_value = genUId() + suffix;
            data[opts.unique_key] = unique_value;
            opts.unique_value = unique_value;
        }
        data[opts.file_data_name] = file;
        mEach(opts.multi_parmas, function (key, value) {
            data[key] = value;
        });
        return JSON.stringify(data);
    }

    function getData(file, opts) {
        return file;
    }

    function Upload(options) {
        this.options = mergeOption(options);

        this.setOptions = function (opts) {
            var me = this;
            mEach(opts, function (key, value) {
                me.options[key] = value;
            });
        };

        this.upload = function (file, callback) {
            if (!file) {
                callback.onError('upload file is null.');
                return;
            }
            var me = this;
            uploadProcess(file, this.options, {
                onProgress: function (loaded, total) {
                    callback.onProgress(loaded, total);
                },
                onCompleted: function (data) {
                    callback.onCompleted(data);
                },
                onError: function (errorCode) {
                    callback.onError(errorCode);
                },
                onOpen: function (xhr) {
                    me.xhr = xhr;
                }
            });
        };

        this.cancel = function () {
            this.xhr && this.xhr.abort();
        };
    }

    function init(options) {
        return new Upload(options);
    }

    function getResizeRatio(imageInfo, config) {
        //hasOwnProperty?

        var ratio = 1;

        var oWidth = imageInfo.width;
        var maxWidth = config.maxWidth || 0;
        if (maxWidth > 0 && oWidth > maxWidth) {
            ratio = maxWidth / oWidth;
        }

        var oHeight = imageInfo.height;
        var maxHeight = config.maxHeight || 0;
        if (maxHeight > 0 && oHeight > maxHeight) {
            var ratioHeight = maxHeight / oHeight;
            ratio = Math.min(ratio, ratioHeight);
        }


        var maxSize = config.maxSize || 0;
        var oSize = Math.ceil(imageInfo.size / 1000); //K，Math.ceil(0.3) = 1;
        if (oSize > maxSize) {
            ratioSize = maxSize / oSize;
            ratio = Math.min(ratio, ratioSize);
        }

        return ratio;
    }

    function resize(file, config, callback) {
        //file对象没有高宽
        var type = file.type; //image format
        var canvas = document.createElement("canvas");

        var reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = function (evt) {
            var imageData = evt.target.result;
            var img = new Image();
            img.src = imageData;
            var width = img.width;
            var height = img.height;
            var imageInfo = {
                width: width,
                height: height,
                size: evt.total
            }
            var ratio = getResizeRatio(imageInfo, config);
            var newImageData = imageData;
            if (ratio < 1) {
                newImageData = compress(img, width * ratio, height * ratio);
                ;
            }
            callback(newImageData);
        }

        function compress(img, width, height) {
            canvas.width = width;
            canvas.height = height;

            var context = canvas.getContext('2d');
            context.drawImage(img, 0, 0, width, height);

            /*
            If the height or width of the canvas is 0, the string "data:," is returned.
            If the requested type is not image/png, but the returned value starts with data:image/png, then the requested type is not supported.
            Chrome also supports the image/webp type.
            */

            var supportTypes = {
                "image/jpg": true,
                "image/png": true,
                "image/webp": supportWebP()
            };
            // var exportType = "image/png";
            // if(supportTypes[type]){
            // 	exportType = type;
            // }
            // 多端一致，缩略图必须是 jpg
            var exportType = "image/jpg";
            var newImageData = canvas.toDataURL(exportType);
            return newImageData;
        }

        function supportWebP() {
            try {
                return (canvas.toDataURL('image/webp').indexOf('data:image/webp') == 0);
            } catch (err) {
                return false;
            }
        }
    }

    var calcPosition = function (width, height, opts) {
        var isheight = width < height;
        var scale = isheight ? height / width : width / height;
        var zoom, x = 0,
            y = 0,
            w, h;

        var gtScale = function () {
            if (isheight) {
                zoom = width / 100;
                w = 100;
                h = height / zoom;
                y = (h - opts.maxHeight) / 2;
            } else {
                zoom = height / 100;
                h = 100;
                w = width / zoom;
                x = (w - opts.maxWidth) / 2;
            }
            return {
                w: w,
                h: h,
                x: -x,
                y: -y
            };
        };

        var ltScale = function () {
            if (isheight) {
                zoom = height / opts.maxHeight;
                h = opts.maxHeight;
                w = width / zoom;
            } else {
                zoom = width / opts.maxWidth;
                w = opts.maxWidth;
                h = height / zoom;
            }
            return {
                w: w,
                h: h,
                x: -x,
                y: -y
            };
        };
        return scale > opts.scale ? gtScale() : ltScale();
    };

    var getBlobUrl = function (file) {
        var URL = window.URL || window.webkitURL;
        return URL ? URL.createObjectURL(file) : "";
    };

    var getThumbnail = function (file, opts, callback) {
        var canvas = document.createElement("canvas"),
            context = canvas.getContext('2d');
        var img = new Image();
        img.onload = function () {
            var pos = calcPosition(img.width, img.height, opts);
            canvas.width = pos.w > opts.maxWidth ? opts.maxWidth : pos.w;
            canvas.height = pos.h > opts.maxHeight ? opts.maxHeight : pos.h;
            context.drawImage(img, pos.x, pos.y, pos.w, pos.h);
            try {
                var base64 = canvas.toDataURL(file.type, opts.quality);
                var reg = new RegExp('^data:image/[^;]+;base64,');
                base64 = base64.replace(reg, '');
                callback(base64);
            } catch (e) {
                throw new Error(e);
            }
        };
        img.src = typeof file == 'string' ? 'data:image/jpg;base64,' + file : getBlobUrl(file);
    };

    var _compress = function (data, callback) {
        var file = data.file;
        var opts = data.compress;
        getThumbnail(file, opts, callback);
    };

    _init = function (config, callback) {
        if (config.getToken) {
            config.getToken(function (token) {
                config.multi_parmas || (config.multi_parmas = {});
                config.multi_parmas.token = token;
                config.headers || (config.headers = {});
                if (config.base64) {
                    config.headers['Content-type'] = 'application/octet-stream';
                    config.headers['Authorization'] = 'UpToken ' + token;
                }
                var instance = init(config);
                callback(instance);
            });
        } else {
            config.headers || (config.headers = {});
            if (config.base64) {
                config.headers['Content-type'] = 'application/octet-stream';
            }
            var instance = init(config);
            callback(instance);
        }
    };

    var _upload = function (data, instance, callback) {
        instance.upload(data.file, {
            onError: function (errorCode) {
                callback.onError(errorCode);
            },
            onProgress: function (loaded, total) {
                callback.onProgress(loaded, total);
            },
            onCompleted: function (result) {
                result.filename || (result.filename = result.hash);
                var compress = data.compressThumbnail || _compress;
                if (data.compress) {
                    compress(data, function (thumbnail) {
                        result.thumbnail = thumbnail;
                        callback.onCompleted(result);
                    });
                } else {
                    callback.onCompleted(result);
                }
            }
        });
    };

    var File = function (instance) {
        var me = this;
        this.instance = instance
        this.upload = function (file, callback) {
            var data = {
                file: file
            };
            _upload(data, me.instance, callback);
        };
        this.cancel = function () {
            me.instance.cancel();
        };
    };

    var initFile = function (config, callback) {
        _init(config, function (instance) {
            var UploadFile = new File(instance);
            callback(UploadFile);
        });
    };

    var Img = function (instance, cfg) {
        var me = this;
        this.cfg = cfg;
        this.instance = instance;
        this.upload = function (file, callback) {
            var data = {
                file: file,
                compress: me.cfg
            };
            _upload(data, me.instance, callback);
        };

        this.cancel = function () {
            me.instance.cancel();
        };
    };

    var initImage = function (config, callback) {
        _init(config, function (instance) {
            var compress = {
                maxHeight: config.height || 240,
                maxWidth: config.width || 240,
                quality: config.quality || 0.5,
                scale: config.scale || 2.4
            };
            var uploadImage = new Img(instance, compress);
            callback(uploadImage);
        });
    };

    var ImgBase64 = function (config) {
        config.base64 = true;
        Img.call(this, config);
    };

    var initImgBase64 = function (config, callback) {
        config.base64 = true;
        initImage.call(this, config, callback);
    };
    var initType = {
        file: function (file, config, callback) {
            initFile(config, function (uploadFile) {
                uploadFile.upload(file, callback);
            });
        },
        image: function (file, config, callback) {
            initImage(config, function (uploadFile) {
                uploadFile.upload(file, callback);
            });
        }
    };

    var imageStartUpload = function (_file, onSuccess) {
        var callback = {
            onError: function (errorCode) {
                console.log(errorCode);
            },
            onProgress: function (loaded, total) {
                // var percent = Math.floor(loaded/total*100);
                // var progressBar 	= document.getElementById('progressBar'),
                // 	progressContent = document.getElementById('progressContent');
                // 	progressBar.style.width = percent + '%';
                //      		progressContent.innerHTML = percent + "%";
            },
            onCompleted: function (data) {
                data.fileType = 'image';
                onSuccess(data);
            }
        };
        initType['image'](_file, fileConfig, callback);
    }
    var fileStartUpload = function (_file, onSuccess) {
        fileConfig.fileType = RongIMLib.FileType.FILE;
        var callback = {
            onError: function (errorCode) {
                console.log(errorCode);
            },
            onProgress: function (loaded, total) {
                // var percent = Math.floor(loaded/total*100);
                // var progressBar 	= document.getElementById('progressBar'),
                // 	progressContent = document.getElementById('progressContent');
                // 	progressBar.style.width = percent + '%';
                //      		progressContent.innerHTML = percent + "%";
            },
            onCompleted: function (data) {
                data.fileType = 'file';
                onSuccess(data);
            }
        };
        initType['file'](_file, fileConfig, callback);
    }


    RCS.imageStartUpload = imageStartUpload;
    RCS.fileStartUpload = fileStartUpload;
    RCS.fileConfig = fileConfig;
})(RCS);


;(function (RCS) {
    var emoji = {
        init: function () {
            RongIMLib.RongIMEmoji.init();
        },
        emojiToHTML: function (emojiContent) {
            return RongIMLib.RongIMEmoji.emojiToHTML(emojiContent);
        },
        symbolToEmoji: function (sym) {
            return RongIMLib.RongIMEmoji.symbolToEmoji(sym);
        },
        getEmoji: function () {
            return RongIMLib.RongIMEmoji.list.map(function (data) {
                return data.node;
            });
        }
    }
    RCS.emoji = emoji;
})(RCS);

;(function (RCS) {
    var getTemplates = function (callback) {
        var list = {
            button: 'templates/button.html',
            chat: 'templates/chat.html',
            closebefore: 'templates/closebefore.html',
            conversation: 'templates/conversation.html',
            endconversation: 'templates/endconversation.html',
            evaluate: 'templates/evaluate.html',
            imageView: 'templates/imageView.html',
            leaveword: 'templates/leaveword.html',
            main: 'templates/main.html',
            imMain: 'templates/imMain.html',
            message: 'templates/message.html',
            imMessage: 'templates/imMessage.html',
            messageTemplate: 'templates/messageTemplate.html',
            imMessageTemplate: 'templates/imMessageTemplate.html',
            userInfo: 'templates/userInfo.html',
        };
        var templates = {};
        for (var key in list) {
            var url = list[key];
            var html = RCS.templateCache[url];
            if (html) {
                templates[key] = html;
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open('get', url, false);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        templates[key] = xhr.responseText;
                    }
                }
                xhr.send(null);
            }

        }
        return templates;
    }
    RCS.getTemplates = getTemplates;
})(RCS);

;(function (RCS) {
    var getTemplates = function (callback) {
        var list = {
            button: 'templates/button.html',
            chat: 'templates/chat.html',
            closebefore: 'templates/closebefore.html',
            conversation: 'templates/conversation.html',
            endconversation: 'templates/endconversation.html',
            evaluate: 'templates/evaluate.html',
            imageView: 'templates/imageView.html',
            leaveword: 'templates/leaveword.html',
            main: 'templates/main.html',
            imMain: 'templates/imMain.html',
            message: 'templates/message.html',
            imMessage: 'templates/imMessage.html',
            messageTemplate: 'templates/messageTemplate.html',
            imMessageTemplate: 'templates/imMessageTemplate.html',
            userInfo: 'templates/userInfo.html',
        };
        var templates = {};
        for (var key in list) {
            var url = list[key];
            var html = RCS.templateCache[url];
            if (html) {
                templates[key] = html;
            } else {
                var xhr = new XMLHttpRequest();
                xhr.open('get', url, false);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        templates[key] = xhr.responseText;
                    }
                }
                xhr.send(null);
            }

        }
        return templates;
    }
    RCS.getTemplates = getTemplates;
})(RCS);

;(function (RCS) {
    var utils = RCS.utils;
    var emoji = RCS.emoji;
    var render = utils.render;
    var conversation = {};
    conversation.lastSendTime = 0;
    conversation.messageContent = [];
    var voicePlay = null;
    var userInfoValue = {};//保存收集用户信息的相关数据
    var templates = {};
    var $ = utils.$;
    var terminal;
    var supportNot = false;//页面是否支持notification

    //加载模板
    var getTemplates = function (callback) {
        templates = RCS.getTemplates();
        callback && callback();
    }

    //键盘回车发送
    var keySend = function (event) {
        if (event.keyCode == '13' && !event.shiftKey) {
            event.preventDefault()
            send();
        } else {
            inputChange();
        }
    }
    //发送
    var send = function (q) {alert(q)
        var inputMsg = $(".rongcloud-text")[0];
        var message = inputMsg.value;
        if (message) {
            message = emoji.symbolToEmoji(message);
            sendMessage(new RongIMLib.TextMessage({content: message, extra: "附加信息"}));
            inputMsg.value = '';
            inputMsg.focus();
        }
    }
    //每6秒执行一次正在输入消息发送
    var inputChange = function () {
        var timespan = new Date().getTime() - conversation.lastSendTime;
        if (timespan > 1000 * 6) {
            conversation.lastSendTime += timespan;
            sendTyping();
        }
    }
    //正在输入中
    var sendTyping = function () {
        if (conversation.targetType == RongIMLib.ConversationType.CUSTOMER_SERVICE) {
            var msg = new RongIMLib.TypingStatusMessage({
                typingContentType: 'RC:TxtMsg',
                data: null
            });
            var callback = function () {
            };
            sendMessage(msg, callback);
        }
    }
    //显示表情
    var showemoji = function (event) {
        event.stopPropagation();
        var emojiContent = $('.rongcloud-expressionWrap')[0];
        if (emojiContent.style.display == 'none') {
            utils.show(emojiContent);
        } else {
            utils.hide(emojiContent);
        }
    }
    //表情点击
    var chooseEmoji = function (event) {
        event.stopPropagation();
        var emojiContent = $('.rongcloud-expressionWrap')[0];
        var thisTarget = event.target || event.srcElement;
        var textArea = $('.rongcloud-text')[0];
        var emojiName = thisTarget.getAttribute('name');
        if (emojiName) {
            textArea.value += emojiName;
            utils.hide(emojiContent);
            if (terminal == 'pc') {
                textArea.focus();
                range = document.createRange();
                range.selectNodeContents(textArea);
                range.collapse(true);
                range.setEnd(textArea, textArea.childNodes.length);
                range.setStart(textArea, textArea.childNodes.length);
                sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }

    function textMessageFormat(content) {
        if (content.length === 0) {
            return '';
        }

        content = utils.encodeHtmlStr(content);

        content = utils.replaceUri(content, function (uri, protocol) {
            var link = uri;
            if (!protocol) {
                link = 'http://' + uri;
            }
            return '<a class="rong-link-site" target="_blank" href="' + link + '">' + uri + '</a>';
        });

        content = utils.replaceEmail(content, function (email) {
            return '<a class="rong-link-email" href="mailto:' + email + '">' + email + '<a>';
        });

        return emoji.emojiToHTML(content, 18);
    }

    //发送消息
    var sendMessage = function (msg, callback) {
        var targetId = conversation.id; // 目标 Id
        RongIMClient.getInstance().sendMessage(conversation.targetType, targetId, msg, {
            // 发送消息成功
            onSuccess: function (message) {
                console.log(message);
                //message 为发送的消息对象并且包含服务器返回的消息唯一Id和发送消息时间戳
                console.log("Send successfully");
                callback && callback();
                if (!callback) {
                    updateConversationList();
                    updateMessage(message);
                }
            },
            onError: function (errorCode, message) {
                var info = '';
                switch (errorCode) {
                    case RongIMLib.ErrorCode.TIMEOUT:
                        info = '超时';
                        break;
                    case RongIMLib.ErrorCode.UNKNOWN_ERROR:
                        info = '未知错误';
                        break;
                    case RongIMLib.ErrorCode.REJECTED_BY_BLACKLIST:
                        info = '在黑名单中，无法向对方发送消息';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_DISCUSSION:
                        info = '不在讨论组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_GROUP:
                        info = '不在群组中';
                        break;
                    case RongIMLib.ErrorCode.NOT_IN_CHATROOM:
                        info = '不在聊天室中';
                        break;
                    default :
                        info = x;
                        break;
                }
                console.log('发送失败:' + info);
            }
        });
    }

    //显示新消息
    var updateMessage = function (message) {
        if (message.messageType == 'ReadReceiptMessage') {
            return;//ReadReceiptMessage的messageType
        }
        conversation.messageContent.push(message);
        var newMessage = modifyMessage(utils.cloneObj(message));
        if (message.messageDirection != 1 && supportNot) {
            pushMessage(newMessage);
        }
        var messageList = $(".rcs-message-box")[0];
        if (!messageList) {
            return;
        }
        if (newMessage.sentTime - conversation.lastSendTime >= 60000) {//超过1分钟
            var messageTime = {};
            messageTime.content = {};
            messageTime.messageType = 'TimeMessage';
            messageTime.sentTime = utils.getTime(newMessage.sentTime);
            messageList.innerHTML += render(templates.imMessageTemplate, messageTime);
            conversation.lastSendTime = newMessage.sentTime;
        }
        messageList.innerHTML += render(templates.imMessageTemplate, newMessage);
        messageList.scrollTop = messageList.scrollHeight;
    }

    //web push message
    var pushMessage = function (msg) {

        if (terminal == 'pc') {
            var title = '消息提醒';
            var options = {
                body: "您有一条新消息，请及时回复",
                icon: (msg.content.user && msg.content.user.icon) ? msg.content.user.icon : "./images/kefu.png",
            };
            var notification = new Notification(title, options);

            notification.onclick = function (event) {
                window.focus();
                notification.close();
            }
            notification.onshow = function () {
                setTimeout(function () {
                    notification.close();
                }, 5000);
            };
        }
    }

    //图片新消息图片加载完毕滚动到最下面
    var scrollBottom = function () {
        var messageList = $(".rcs-message-box")[0];
        messageList.scrollTop = messageList.scrollHeight;
    }
    //加载历史消息
    var loadHisMessages = function () {
        var callbacks = function (list, hasMsg) {
            var messageBox = $(".rcs-message-box")[0];
            var messageList = {};
            messageList.hasMore = hasMsg;
            messageList.list = modificateMessage(conversation.messageContent);
            var oldHeight = messageBox.scrollHeight;
            messageBox.innerHTML = render(templates.imMessage, messageList);
            var newHeight = messageBox.scrollHeight;
            messageBox.scrollTop = newHeight - oldHeight;
        }
        getHisMessage(conversation.id, null, 20, callbacks);
    }

    var createIMConversation = function (config) {
        var data = {
            "showConversitionList": true
        }
        var callback = function (list) {

            var obj = {};
            obj.list = list;
            data.conversationList = render(templates.conversation, obj);
            $(".customer-service")[0].innerHTML = render(templates.imMain, data);
        }
        getConversationList(callback);
    }

    //开始会话1
    var startConversation = function (event) {
        //if (RCS.config.type === 1) {


            conversation.messageContent = [];
            conversation.id = RCS.config.targetId;
            conversation.mcount = 0

            openConversation(conversation);


            return false
       // }
        //return false
        var thisTarget = event.target || event.srcElement;
        if (thisTarget.className.indexOf('rongcloud-sprite') != -1) {
            event.currentTarget.parentNode.removeChild(event.currentTarget);
            removeConversation(event.currentTarget.getAttribute("_cid"));
            if (conversation.id == event.currentTarget.getAttribute("_cid")) {
                $('.rcs-chat-wrapper')[0].innerHTML = '';
            }
            return;
        }
        if (conversation.id == event.currentTarget.getAttribute("_cid")) {
            return;
        }
        conversation.messageContent = [];
        conversation.id = event.currentTarget.getAttribute("_cid");
        conversation.mcount = event.currentTarget.getAttribute('_mcount');
        if (conversation.mcount != 0) {
            var badge = event.currentTarget.querySelector('.rongcloud-badge');
            if (badge) {
                badge.parentNode.removeChild(badge);
                clearUnreadCount(conversation.id);
            }
        }
        //打开会话
        openConversation(conversation);
    }

    //删除会话
    var removeConversation = function (targetId) {
        RongIMClient.getInstance().removeConversation(RongIMLib.ConversationType.PRIVATE, targetId, {
            onSuccess: function (bool) {
                console.log('删除会话成功');
                // 删除会话成功。
            },
            onError: function (error) {
                // error => 删除会话的错误码
            }
        });
    }

    //获取会话列表
    var getConversationList = function (callback) {
        RongIMClient.getInstance().getConversationList({
            onSuccess: function (list) {
                //用户信息处理 http://support.rongcloud.cn/kb/NjQ5
                var _list = [];
                for (var i = 0; i < list.length; i++) {
                    if (list[i].conversationType == RongIMLib.ConversationType.PRIVATE) {
                        _list.push(list[i]);
                    }
                }
                var temp = _list[0];
                for (var i = 0; i < _list.length; i++) {
                    for (var j = i + 1; j < _list.length; j++) {
                        if (_list[i].sentTime < _list[j].sentTime) {
                            var temp = _list[i];
                            _list[i] = _list[j];
                            _list[j] = temp;
                        }
                    }
                }
                callback && callback(_list);
            },
            onError: function (error) {
                // do something...
            }
        }, null);
    }

    //更新会话列表
    var updateConversationList = function () {
        var callback = function (list) {
            var obj = {};
            obj.list = list;
            $('.rcs-conversation-list')[0].innerHTML = render(templates.conversation, obj);
        }
        getConversationList(callback);
    }

    //清楚未读消息数
    var clearUnreadCount = function (targetId) {
        //var conversationType = RongIMLib.ConversationType.PRIVATE;
        var conversationType = null;
        RCS.config === 1 ? conversationType = RongIMLib.ConversationType.PRIVATE : conversationType = RongIMLib.ConversationType.CUSTOMER_SERVICE

        RongIMClient.getInstance().clearUnreadCount(conversationType, targetId, {
            onSuccess: function () {
                console.log('清除未读消息成功');
                // 清除未读消息成功。
            },
            onError: function (error) {
                // error => 清除未读消息数错误码。
            }
        });
    }

    //进入指定会话
    var openConversation = function (conversation) {
        RCS.config === 1 ? conversation.targetType = RongIMLib.ConversationType.PRIVATE : conversation.targetType = RongIMLib.ConversationType.CUSTOMER_SERVICE
        //conversation.targetType = RongIMLib.ConversationType.PRIVATE;
        //conversation.targetType = RongIMLib.ConversationType.CUSTOMER_SERVICE ;
        var chat = $(".rcs-chat-wrapper")[0];
        var callbacks = function (list, hasMsg) {
            var data = {};
            var messageList = {};
            messageList.firstEnter = true;
            messageList.list = modificateMessage(list);

            data.messageList = render(templates.imMessage, messageList);
            data.targetName = '用户：' + conversation.id;
            data.terminal = terminal;
            $(".rcs-chat-wrapper")[0].innerHTML = render(templates.chat, data);
            scrollBottom();
            utils.hide($('.rongcloud-mode2')[0]);
            utils.show($('.rongcloud-mode1')[0]);
            //初始化表情
            var emojiList = emoji.getEmoji();
            var strHtml = '';
            for (var i = 0; i < emojiList.length; i++) {
                strHtml += '<div class="emojiItem">' + emojiList[i].outerHTML + '</div>';
            }
            $('.rongcloud-expressionContent')[0].innerHTML += strHtml;

            if (hasMsg) {
                $('.rongcloud-Messages-history')[0].style.display = 'block';
            }
        }
        var count = conversation.mcount < 2 ? 2 : (conversation.mcount > 20 ? 20 : conversation.mcount);
        getHisMessage(conversation.id, 0, parseInt(count), callbacks);
    }

    //拉去消息记录
    var getHisMessage = function (conversationId, timestrap, count, callbacks) {
        var conversationTypevar = null
        RCS.config === 1 ? conversationType = RongIMLib.ConversationType.PRIVATE : conversationType = RongIMLib.ConversationType.CUSTOMER_SERVICE

        // var conversationType = RongIMLib.ConversationType.PRIVATE; //私聊,其他会话选择相应的消息类型即可。
        var targetId = conversationId; // 想获取自己和谁的历史消息，targetId 赋值为对方的 Id。
        // timestrap默认传 null，若从头开始获取历史消息，请赋值为 0 ,timestrap = 0;
        // count每次获取的历史消息条数，范围 0-20 条，可以多次获取。
        RongIMLib.RongIMClient.getInstance().getHistoryMessages(conversationType, targetId, timestrap, count, {
            onSuccess: function (list, hasMsg) {
                conversation.messageContent = list.concat(conversation.messageContent);
                callbacks(list, hasMsg);
            },
            onError: function (error) {
                console.log("GetHistoryMessages,errorcode:" + error);
            }
        });
    }

    //单条消息修饰
    var modifyMessage = function (msg) {
        if (msg.messageType == 'TextMessage') {
            msg.content.content = textMessageFormat(msg.content.content);
        } else if (msg.messageType == 'FileMessage') {
            msg.content.size = utils.getFileSize(msg.content.size);
        } else if (msg.messageType == 'VoiceMessage') {
            RongIMLib.RongIMVoice.preLoaded(msg.content.content);
        }
        return msg;
    }

    //消息修饰，2条消息之间相差6000毫秒，显示消息发送时间
    var modificateMessage = function (list) {
        var listTemp = JSON.parse(JSON.stringify(list));
        var _list = [];
        for (var i = 0; i < listTemp.length; i++) {
            var messageTime = {
                sentTime: utils.getTime(listTemp[i].sentTime),
                messageType: 'TimeMessage'
            };
            var messageMap = [
                "TextMessage",
                "FileMessage",
                "SightMessage",
                "ImageMessage",
                "VoiceMessage",

            ];
            if (messageMap.indexOf(listTemp[i].messageType) >= 0) {
                listTemp[i] = modifyMessage(listTemp[i]);
            } else {
                listTemp[i].messageType = 'UnknownMessage';
            }
            if (i == 0) {
                _list.push(messageTime);
            } else if (listTemp[i].sentTime - listTemp[i - 1].sentTime >= 60000) {
                _list.push(messageTime);
            }
            _list.push(listTemp[i]);
        }
        return _list;
    }

    //播放音频
    var play = function (event, msgContent) {
        RongIMLib.RongIMVoice.stop();
        var thisTarget = event.target || event.srcElement;
        if (thisTarget.className.indexOf('rongcloud-animate') != -1) {
            thisTarget.className = thisTarget.className.replace(' rongcloud-animate', '');
            clearTimeout(voicePlay);
        } else {
            var audioStatusNode = thisTarget.parentNode.querySelector('.rongcloud-audioState');
            if (audioStatusNode) {
                audioStatusNode.parentNode.removeChild(audioStatusNode);
            }
            if (voicePlay) {
                clearTimeout(voicePlay);
                var voiceList = $('.rongcloud-audioBox');
                for (var i = 0; i < voiceList.length; i++) {
                    voiceList[i].className = 'rongcloud-audioBox rongcloud-clearfix';
                }
            }
            RongIMLib.RongIMVoice.play(msgContent.content, msgContent.duration);
            thisTarget.className = thisTarget.className + ' rongcloud-animate';
            voicePlay = setTimeout(function () {
                thisTarget.className = thisTarget.className.replace(' rongcloud-animate', '');
            }, msgContent.duration * 1000);
        }
    }

    //播放视频
    var playVideo = function (event) {
        var video = event.currentTarget.querySelector('video');
        var btn = event.currentTarget.querySelector('.play-btn');
        if (video.paused) {
            video.play();
            btn.style.display = "none";
        } else {
            video.pause();
            btn.style.display = "block";
        }
        video.onended = function () {
            btn.style.display = "block";
        }
    }


    //img上传图片
    var imgUpload = function (event) {
        var thisTarget = event.target || event.srcElement;
        var _file = thisTarget.files;
        for (var i = 0; i < _file.length; i++) {
            RCS.imageStartUpload(_file[i], function (data) {
                console.log("文件上传完成：", data);
                getFileUrl(data);
            });
        }
        thisTarget.value = '';
    }
    //上传文件
    var fileUpload = function (event) {
        var thisTarget = event.target || event.srcElement;
        var _file = thisTarget.files;
        for (var i = 0; i < _file.length; i++) {
            RCS.fileStartUpload(_file[i], function (data) {
                console.log("文件上传完成：", data);
                getFileUrl(data);
            });
        }
        thisTarget.value = '';
    }

    var urlItem = {
        file: function (data) {
            if (RCS.config.fileConfig && RCS.config.fileConfig.isPrivate) {
                if (data.rc_url.type == 1) {
                    data.downloadUrl = data.rc_url.path;
                } else {
                    data.downloadUrl = RCS.config.fileConfig.fileServer + data.rc_url.path;
                }
                var msg = messageItem[data.fileType](data);
                sendMessage(msg);
            } else {
                var fileType = RongIMLib.FileType.FILE;
                RongIMClient.getInstance().getFileUrl(fileType, data.filename, data.name, {
                    onSuccess: function (result) {
                        data.downloadUrl = result.downloadUrl;
                        var msg = messageItem[data.fileType](data);
                        sendMessage(msg);
                    },
                    onError: function (error) {
                        showResult('getFileToken error:' + error);
                    }
                });
            }
        },
        image: function (data) {
            if (RCS.config.upload && RCS.config.upload.isPrivate) {
                if (data.rc_url.type == 1) {
                    data.downloadUrl = data.rc_url.path;
                } else {
                    data.downloadUrl = RCS.config.upload.fileServer + data.rc_url.path;
                }
                var msg = messageItem[data.fileType](data);
                sendMessage(msg);
            } else {
                var fileType = RongIMLib.FileType.IMAGE;
                RongIMClient.getInstance().getFileUrl(fileType, data.filename, null, {
                    onSuccess: function (result) {
                        data.downloadUrl = result.downloadUrl;
                        var msg = messageItem[data.fileType](data);
                        sendMessage(msg);
                    },
                    onError: function (error) {
                        console.log(error);
                    }
                });
            }
        }
    };
    var messageItem = {
        file: function (file) {
            var name = file.name || '',
                index = name.lastIndexOf('.') + 1,
                type = name.substring(index);
            // 发送文件消息请参考： http://rongcloud.cn/docs/web_api_demo.html#发送消息
            // 创建文件消息
            return new RongIMLib.FileMessage({name: file.name, size: file.size, type: type, fileUrl: file.downloadUrl});
        },
        image: function (image) {
            return new RongIMLib.ImageMessage({content: image.thumbnail, imageUri: image.downloadUrl});
        }
    };

    var getFileUrl = function (data) {
        urlItem[data.fileType](data);
    }

    //关闭聊天窗口
    var endConversation = function () {
        $('.rcs-chat-wrapper')[0].innerHTML = '';
    }

    //最小化
    var minimize = function () {
        utils.hide($('.customer-service')[0]);
    }

    //预览图片
    var viewImage = function (event) {
        var thisTarget = event.target || event.srcElement;
        var image = {
            imageUrl: thisTarget.getAttribute('data-img')
        }
        $('.imageViewBox')[0].innerHTML = render(templates.imageView, image);
        utils.fadein($('.imageViewBox')[0]);
    }
    var escImageView = function () {
        $('.imageViewBox')[0].innerHTML = '';
        utils.fadeout($('.imageViewBox')[0]);
    }

    //sdk初始化
    var sdkInit = function (params, callbacks) {
        var appKey = params.appKey;
        var token = params.token;
        var navi = params.navi || "";


        if(window.rongyun){
            RCS.config.target.innerHTML = render(templates.main);


            startConversation()
            return false
        }



        if (navi !== "") {
            //私有云
            var config = {
                navi: navi
            };
            console.log("私有云");
            console.log(params);
            RongIMLib.RongIMClient.init(appKey, null, config);
        } else {
            //公有云
            console.log("公有云");
            console.log(params);
            RongIMLib.RongIMClient.init(appKey);
        }

        var instance = RongIMClient.getInstance();

        // 连接状态监听器
        RongIMClient.setConnectionStatusListener({
            onChanged: function (status) {
                console.log(status);
                var connectDom = $('.rcs-connect-status')[0];
                if (connectDom) {
                    connectDom.style.display = 'block';
                }
                switch (status) {
                    case RongIMLib.ConnectionStatus.CONNECTED:
                        if (connectDom) {
                            connectDom.style.display = 'none';
                        }
                        callbacks.getInstance && callbacks.getInstance(instance);
                        console.log('zzzzz');
                        break;
                    case RongIMLib.ConnectionStatus.CONNECTING:
                        console.log('正在链接');
                        break;
                    case RongIMLib.ConnectionStatus.DISCONNECTED:
                        console.log('断开连接');
                        break;
                    case RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
                        console.log('其他设备登录');
                        break;
                    case RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
                        console.log('域名不正确');
                        break;
                    case RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
                        console.log('网络不可用');
                        break;
                    case RongIMLib.ConnectionStatus.DISCONNECTED:
                        console.log('断开连接');
                        break;
                    case 4:
                        console.log('token无效');
                        break;
                    default:
                        console.log('未知错误');
                        break;
                }
            }
        });

        RongIMClient.setOnReceiveMessageListener({
            // 接收到的消息
            onReceived: function (message) {alert(4526)
                debugger
                // 判断消息类型
                console.log("新消息: " + message.targetId);
                if (message.offLineMessage) {
                    return;
                }
                console.log(message);
                if (message.conversationType == RongIMLib.ConversationType.PRIVATE||message.conversationType == RongIMLib.ConversationType.CUSTOMER_SERVICE) {
                    if (message.targetId == conversation.id) {
                        updateMessage(message);
                        clearUnreadCount(conversation.id);
                    }
                    updateConversationList();
                }
            }
        });

        //开始链接
        RongIMClient.connect(token, {
            onSuccess: function (userId) {
                callbacks.getCurrentUser && callbacks.getCurrentUser(userId);
                window.rongyun = true
                console.log("链接成功，用户id：" + userId);

            },
            onTokenIncorrect: function () {
                console.log('token无效');
            },
            onError: function (errorCode) {
                console.log("=============================================");
                console.log(errorCode);
            }
        });
    }

    //创建button
    var createButton = function (config) {
        //config.target.innerHTML = render(templates.button);
        var innerDiv = config.target.appendChild(document.createElement('DIV'))
        // config.target.appendChild(document.createElement('DIV')) = render(templates.button);
        innerDiv.innerHTML = render(templates.button);
        //createIMConversation(config);

        addListener(config);
    }

    var addListener = function (config) {
        var callback = function (phoneOrPc) {
            terminal = phoneOrPc;
        }
        utils.browserRedirect(callback);
        if (terminal == 'pc') {
            document.body.onclick = function () {
                hideEmoji();
            }
            if (Notification.permission === "granted") {
                supportNot = true;
            }
            // Otherwise, we need to ask the user for permission
            else if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        supportNot = true;
                    }
                });
            }
        } else {
            document.body.ontouchstart = function (event) {
                if (event.target.className.indexOf('emojiItem') < 0 && event.target.className.indexOf('rong-emoji-content') < 0 && event.target.className.indexOf('rongcloud-expressionContent') < 0) {
                    hideEmoji();
                }
                if (event.target.className.indexOf('rongcloud-rong-btn') < 0 && event.target.className.indexOf('rongcloud-text') < 0) {
                    var inputMsg = $(".rongcloud-text")[0];
                    if (inputMsg) {
                        inputMsg.blur();
                    }
                }
            }
        }
    }

    var hideEmoji = function () {
        var emojiContent = $('.rongcloud-expressionWrap')[0];
        if (emojiContent) {
            utils.hide(emojiContent);
        }
    }

    //button点击事件
    var showCommon = function () {
        startConversation()
        return false
        var csContext = $('.customer-service')[0];
        if (csContext.style.display == 'none') {
            utils.show($('.customer-service')[0]);
        } else {
            utils.hide($('.customer-service')[0]);
        }
    }

    var sendTextMessage = function (instance) {
        var content = {
            content: [
                "这是一条测试各种字符的消息",
                "阿拉伯语：الشرق الأوسط ",
                "希伯来语：המזרח התיכון",
                "希腊字母： π，α，β, ",
                "数字单位部分字符 如：× ",
                "拉丁文所有字符 如：Ο Ρ σ Ï Æ ",
                "拼音所有字符 如： ě ì ň ",
                "英文音标部分字符 如 ： ə ʃ ",
                "俄文部分字符 如 ：ш ; ⊇ â Œ Š ™ "
            ].join(",")
        };

        var msg = new RongIMLib.TextMessage(content);
        var conversationType = null; // 私聊
        //var conversationType = RongIMLib.ConversationType.PRIVATE; // 私聊


        RCS.config === 1 ? conversationType = RongIMLib.ConversationType.PRIVATE : conversationType = RongIMLib.ConversationType.CUSTOMER_SERVICE

        //var targetId = "bb";
        var targetId = "yuyuyu99";
        var rr = "gg";
        instance.sendMessage(conversationType, targetId, msg, {
            onSuccess: function (message) {
                console.log(message);
            },
            onError: function (errorCode, message) {
                console.log(errorCode);
            }
        });
    }

    //im组件初始化
    var init = function (config) {
        RCS.config = config;
        config.isIM = true;
        var callbacks = {
            getInstance: function (instance) {
                var callback = function () {
                    if (RCS.config.templates) {
                        for (var index in RCS.config.templates) {
                            templates[index] = RCS.config.templates[index];
                        }
                    }
                }
                getTemplates(callback);


                if (config.type === 1) {

                    config.target.innerHTML = render(templates.main);


                    startConversation()
                    return false
                }else{

                    config.target.innerHTML = render(templates.main);


                    startConversation()
                    return false








                    // config.target.innerHTML = render(templates.main);
                    //
                    //
                    // //startConversation()
                    // emoji.init();
                    // createButton(config);
                }



                //发送一条消息，为了确保有会话，实际使用时请删除1
                //sendTextMessage(instance);
            },
            getCurrentUser: function (userId) {
                showInfo(userId);
            }
        }
        sdkInit(config, callbacks);
    }

    //H5唤醒键盘的时候输入框显示在视野内
    var keyboard = function (event) {
        var thisTarget = event.target || event.srcElement;
        setTimeout(function () {
            thisTarget.scrollIntoView(true);
        }, 500)
    }

    //页面显示当前用户信息
    var showInfo = function (userId) {
        var dialog = document.createElement('h2');
        dialog.innerText = '当前用户：';
        var userInfo = document.createElement('span');
        userInfo.innerText = userId;
        dialog.appendChild(userInfo);
        document.body.appendChild(dialog);
    }

    //对外暴露
    RCS.init = init;
    RCS.send = send;
    RCS.keySend = keySend;
    RCS.showemoji = showemoji;
    RCS.chooseEmoji = chooseEmoji;
    RCS.loadHisMessages = loadHisMessages;
    RCS.scrollBottom = scrollBottom;
    RCS.imgUpload = imgUpload;
    RCS.fileUpload = fileUpload;
    RCS.endConversation = endConversation;
    RCS.play = play;
    RCS.playVideo = playVideo;
    RCS.minimize = minimize;
    RCS.showCommon = showCommon;
    RCS.confirm = confirm;
    RCS.close = close;
    RCS.viewImage = viewImage;
    RCS.escImageView = escImageView;
    RCS.keyboard = keyboard;
    RCS.startConversation = startConversation;
})(RCS);