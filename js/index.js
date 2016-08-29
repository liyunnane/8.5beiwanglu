// 事件委托
// window.onload=function(){
//     var add=document.getElementsByClassName('add')[0];
//     var da=document.getElementsByClassName('da')[0];
//     var xiao=document.getElementsByClassName('xiao');
//     add.onclick=function(){
//         var newi = document.createElement('div');
//         newi.classList.add('xiao');
//        da.appendChild(newi);
//     }
//
// // for(var i=0;i<xiao.length;i++){
// //     xiao[i].index=i;
// //     xiao[i].onclick=function(){
// //         alert(this.index)
// //     }
// // }
//
//
// da.onclick=function(e){
//     var el=e.target;
//     if(el==this){return}
//     el.style.backgroundColor='blue'
// }
//
// }
//








// $(function(){
   // 操作localStorage
   //  var database=[];
   //  $.setl=function(data,arr){
   //      localStorage[data]=JSON.stringify(arr);
   //  }
   //  $.getl=function(data){
   //      return JSON.parse(localStorage[data]);
   //  }
   //
   //  var render=function(){
   //      $('.single').empty();
   //      var v=database[];
   //      for(var i=0;i<database.length;i++){
   //      $('<li data-id="+v.id+"><div class="check'+v.isdown?'end':''+'"></div> <p>'+$(this).val()+'</p> <div      class="delete"></div> <input type="text" value='+$(this).val()+'></li>').appendTo(single);
   //  }
   //  }
   //
   //
   //
   //  if(database['data']){
   //      database=$.getl('data');
   //      render();
   //  }
   //
   //
   // var headinput=$('.todo .header input');
   //  var single=$('.single');
   //  //将在input中添加的东西添加到页面中
   //  headinput.on('keyup',function(e){
   //      if(e.keyCode==13){
   //          if(!v){
   //              return;
   //          }
   //          // $('<li><div class="check"></div> <p>'+$(this).val()+'</p> <div class="delete"></div> <input type="text" value='+$(this).val()+'></li>').appendTo(single);
   //          if(database==0){
   //              id=0;
   //          }else{
   //              var id=database[dayabase.length]-1;
   //          }
   //
   //          database.push({
   //              id:id,name:v,isdown:0;
   //          })
   //
   //          $.setl('data',database);
   //
   //      }
   //  })
   //
   //
   //  //页面中的点击事件
   //  $('.todo').on('click','.check',function(){
   //      $(this).closest('li').toggleClass('end');
   //  })
   //  $('.todo').on('dblclick','.single li p',function(){
   //      $(this).closest('li').toggleClass('editor');
   //      $(this).closest('li').find('input').val($(this).closest('li').find('input').val()).focus();
   //      $(this).closest('li').find('input').get(0).onblur=function(){
   //          var vals=$(this).val();
   //          $(this).closest('li').removeClass('editor');
   //          $(this).closest('li').find('p').text(vals)
   //      }
   //
   //  });
   //  $('.todo').on('click','.single .delete',function(){
   //      var li=$(this).closest('li');
   //      var id=parseInt(li.attr('data-id'));
   //      li.remove();
   //
   //
   //  })

// })




var todo=angular.module('todo',['ngAnimate']);

todo.controller('mainCtrl',['$scope','$timeout',
    function($scope,$timeout){
    var getTime=function(){
            setInterval(function(){
                $timeout(function(){
                    var date=new Date();
                    var h=date.getHours();
                    var f=date.getMinutes();
                    f=f<10?('0'+f):f;
                    var m=date.getSeconds();
                    m=m<10?('0'+m):m;
                    $scope.time=h+':'+f+':'+m;
                },0)
            },10);
        };
    $scope.time= getTime();
    $scope.content='';
    $scope.detete=function(id){
        var index;
        for(var i=1;i<$scope.singles.length;i++){
            if($scope.singles[i].id==id){
                index=i;
            }
        }
        $scope.singles.splice(index,1);

    }
    $scope.focus=function(e){
        $timeout(function(){
            $(e.currentTarget).find('input').trigger('focus');
        },0)
    }
    $scope.add=function(e){
         if(e.keyCode==13){
                if($scope.singles.length==0){
                    var  min=1000;
                }else{
                    var min=-Infinity;
                    for(var i=0;i<$scope.singles.length;i++){
                        var obj=$scope.singles[i];
                        if(obj.id>min){
                            min=obj.id;
                        }
                    }
                    min+=1;
                }
             if($scope.content==''){
                 return;
             }else{
                 $scope.singles.push({id:min,name:$scope.content,isDone:false});
             }
             $scope.content='';
             console.table($scope.singles)
            }

        }
    if(localStorage._x){
            $scope.singles=JSON.parse(localStorage._x);
        }else{
            $scope.singles=[];
        }
    $scope.save=function(){
            localStorage._x=JSON.stringify($scope.singles);
        }
    $scope.clear=function(){
        var newarr=[];
        for(var i=0;i<$scope.singles.length;i++){
            if($scope.singles[i].isDone==false){
                newarr.push($scope.singles[i]);
            }
        }
        $scope.singles=newarr;
        }
    $scope.huanse=function(){
        var a=  parseInt(Math.random()*225);
        var b=  parseInt(Math.random()*225);
        var c=  parseInt(Math.random()*225);
        console.log('rgba('+a+','+b+','+c+')')
        $('#body').css({background:'rgba('+a+','+b+','+c+',0.8)'});
        }
    // $scope.name='';
    // if(localStorage._y){
    //     $scope.singles=JSON.parse(localStorage._x);
    // }else{
    //     $scope.singles=[];
    // }
    // $scope.add=function(e){
    //     if(e.keyCode==13){
    //         $scope.singles.push({name:$scope.name,isDone:false});
    //         $scope.name='';
    //     }
    // }
    // $scope.save=function(){
    //     localStorage._y=JSON.stringify($scope.singles);
    // }
    // $scope.delete=function(i){
    //     $scope.singles.splice(i,1);
    // }



}])
