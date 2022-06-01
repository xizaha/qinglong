    








<!-- CDN地址 -->



<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
    <meta http-equiv="expires" content="-1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>活动已结束</title>
    <link rel="stylesheet" href="//cjwxpp.dianpusoft.cn/resources/wxjs/gallery/ibd/ibd.css?6163">
    <!--处理不同页面大小兼容的方法，必须放在最上面-->
    <script src="//cjwxpp.dianpusoft.cn/resources/wxjs/htmlFontSize.js?6163"></script>
    <script src="//cjwxpp.dianpusoft.cn/resources/wxjs/zepto.min.js?6163"></script>
    <script src="//cjwxpp.dianpusoft.cn/resources/wxjs/vue.min.js?6163"></script>
    <script src="//cjwxpp.dianpusoft.cn/resources/wxjs/wxcomponents.js?6163"></script>
    <script src="//cjwxpp.dianpusoft.cn/resources/wxjs/gallery/ibd/ibd.min.js?6163"></script>
    <script src="https://lzkjdz-isv.isvjcloud.com/resources/wxjs/config.min.js?6163"></script>
    <script src="//cjwxpp.dianpusoft.cn/resources/wxjs/jd/jssdk.min.js?6163"></script>
</head>
<body>
<input type="hidden" id="baseUrl" value="https://lzkjdz-isv.isvjcloud.com">
<input type="hidden" id="baseResourcesUrl" value="//cjwxpp.dianpusoft.cn/resources">
<input type="hidden" id="activityId" value="2205100037674501">
<input type="hidden" id="userId" value="">

<div id="app" class="f-tac" style="max-width: 750px;margin: 0 auto;margin-top: 3rem;">
    <div><img class="f-ib" src="//cjwxpp.dianpusoft.cn/resources/images/activity_end.jpg" alt=""
              style="width: 2.28rem;height: 2.28rem;"></div>
    <div style="margin-top:0.45rem;font-size: 0.36rem;">您来晚了,活动已经结束了</div>
    <div style="margin-top:0.2rem;font-size: 0.24rem;color: #666;">下次记得早点来哦~</div>
    <div v-if="shopInfo.sid != '--'" style="margin-top: 0.8rem;">
        <a class="f-ib" href="javascript:;" @click="gotoShopPage( shopInfo.sid)"
           style="width: 4.4rem;height: 0.9rem;line-height: 0.9rem;color: #fff;background: #0088df;border-radius: 0.55rem;">进店逛逛</a>
    </div>
</div>

<script>
    var baseUrl = $("#baseUrl").val();
    //资源路径
    var baseResourcesUrl = $("#baseResourcesUrl").val();
    //活动ID
    var activityId = $("#activityId").val();
    var userId = $("#userId").val();
    var isInJDApp = JSSDK.Client.isJDApp();
    if(isInJDApp){
        SYS_FROMTYPE = "APP";
    } else {
        SYS_FROMTYPE = "WeChat";
    }
    new Vue({
        el: "#app",
        data: {
            shopInfo: {
                sid: "--"
            }
        },
        methods:  {
            getShopInfo: function () {
                if(userId && userId != ""){
                    var _this = this;
                    $.ajax({
                        url: baseUrl + '/wxActionCommon/getShopInfoVO',
                        type: 'post',
                        data: {
                            userId: userId
                        },
                        dataType: 'json',
                        success: function (data) {
                            if(data.result){
                                _this.shopInfo = data.data;
                            }else{
                                $.toast(data.errorMessage);
                            }
                        }
                    });
                }
            }
        },
        mounted: function () {
            this.getShopInfo();
        }
    });
</script>
</body>
</html>
