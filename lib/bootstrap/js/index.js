
var API = new wjsApi();
// var NEWS = new news();
var _pageSize = 10;
var index = 0;
function init(){
    $(".news-left").on("click","li",function() {
        var tar = $(this).attr("tar");
        $(this).addClass("active").siblings().removeClass("active");
        $(".newsContent").hide();
        $("#"+tar).show();
        $('.page').show();
        index=$("#"+tar).attr('index');
        if(tar == 'newsHistory'){
            $('#newsHistory').show();
            $('.page').hide();
            setTimeout(function(){
                $(window).scrollTop(0);
            },0);
            return ;
        }else if(tar == 'newsReport'){
            newsReport();
            return ;
        }else if(tar == 'newsEvaluate'){
            $('.page').hide();
            return ;
        }else{
            newsDetail();
        }

    });
    //解析url
    var url = window.location.href;
    var footer = url.split('#');
    var target = '';
    if(footer.length>1 && footer[1]){
        target = footer[1];
    }
    if(target){
        $('[name='+target+']').parent('li').click();
    }else{
        newsDetail();
    }
}

function newsReport(pageIndex,aData){
    pageIndex = pageIndex ? pageIndex: 0;
    var data = aData ? aData : {'pageIndex':pageIndex,'pageSize':7};
    API.get("news/getInterestRateReportList",data,function(aData){
        if(API.check(aData)) {
            var newsList = aData.data.data;
            var newsArr = [];
            $.each(newsList, function (a, item) {
                var temp = '<li><a href="' + item.filePath + '" target="_blank">' + item.reportName + '</a></li>';
                newsArr.push(temp);
            });
            $("#rateReport").html(newsArr.join(''));
            $.initPage(newsReport, data.pageSize, pageIndex, aData.data.dataCount, $(".page"));
            $(window).scrollTop(0);
        }
    });
}

function newsDetail(pageIndex,aData){
    pageIndex = pageIndex ? pageIndex: 0;
    var data = aData ? aData : {'pageIndex':pageIndex,'pageSize':_pageSize,'flag':index};
   API.get("news/getNewsList",data,function(aData){
        var newsList = aData.data.data;
        var newsArr = [];
       $.each(newsList,function(a,item){
           var newsTitle = item.title;
           var date = $.formatTimestamp(item.createTime).split(" ",1);
           var newsPictuer = item.picture ? item.picture : " ";
           var temp = '<dl class="n-dl">'+
                '<dt class="n-title"><a target="_blank" href="/news/detail/' + item.announcementId +'">' + newsTitle + '</a></dt>'+
                '<dd>'+
                '<small class="n-date">' + date + '</small><br />'+
                // '<img src="'+ newsPictuer +'">' +
                '<p class="n-content">'+ item.context + '</p>'+
                '<a class="n-more" href="/news/detail/' + item.announcementId + '" target="_blank">Read more →</a>'+
                '</dd>'+
           '</dl>'
           newsArr.push(temp);
       });
       $(".newsContent[index=" + index + "]").html(newsArr.join(''));
       $.initPage(newsDetail,data.pageSize,pageIndex,aData.data.dataCount,$(".page"));
       $(window).scrollTop(0);
   });
}

init();