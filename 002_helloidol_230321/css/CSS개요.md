#style 적용 3가지 방법
1. <...style="..."> in HTML
1. ```<style>...</style>``` in HTML ```<head>``` /*html로 인식*/
1. __.css 파일 만들어서 link__ /*두꺼워짐*/

#형식
```css 
selector {
    attribute: value; /*comment*/
}
``` 
#selector
<pre>
* 전체에 스타일 적용
#id :고유의 것,하나의 html 에는 id 값이 1개여야 한다. 
.class : 하나의 html 에서 여러번 쓸 수 있다. 주어진 값을 class 속성값으로 가진 html 요소를 찾아 
TAG : 특정 태그가 쓰인 모든 요소에 스타일을 적용한다. 전체 선택자 다음으로 범위가 넓으며 해당 태그를 사용하는 모든 요소에 적용됩니다. 

https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors
</pre>
#selector
<pre>
selector1 selector2 : 하위 개체로 지정 / selector1 요소의 자식 중 모든 selector2

selector1>selector2 : 첫번째 요소의 바로 아래 자식인 노드를 선택한다. / selector1요소의 자식 중 모든 selector2

selector1,selector2 : 일치하는 모든 요소를 선택합니다. /우리가 알고있는 , : 선택자 그룹을 생성하는 방법으로 모든 일치하는 

selector1 + selector2 : selector1 의 첫째 자매 selector2 하나 선택/ 앞의 요소 바로 뒤에 있는 요소 /인접 선택자로 부르는 선택자 
selector1은 선택되지 않고 selector2만 선택된다.

selector1 ~ selector2 : selector 요소 중 모든 selector2 선택/ p~ul:p요소 뒤에 있는 모든 자매 ul 선택한데요.형제, 첫 번째 요소를 뒤따르면서 같은 부모를 공유하는 두번째 요소를 선택합니다. 

selector : first-child() : 부모안에 모든 요소 중 첫번째 요소 /selector 요소 중 첫번째 

selector : nth-child(n) : 부모안에 모든 요소 중 n 번째요소/형제 요소 중에서 특정 순서(n)에 있는 요소를 선택할 때 사용

selector:hover : 마우스를 올렸을 때 반응하게 하는 요소 /요소의 마우스가 올라가는 동안 selector를 선택

[속성="값"]  <...TAG 속성="값">인 모든 요소 선택>인 모든 요소

</pre>

#{ 우선순위 }
1. !important
2.#id
3.class
4.TAG
5. \*
- 구체적인 것>포괄적인 것  
- 같은 우선순위일 때, 나중에 쓴게 적용

*/
