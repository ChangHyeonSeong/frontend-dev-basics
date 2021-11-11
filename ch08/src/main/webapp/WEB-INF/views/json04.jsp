<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%> 
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"></script>
<script type="text/javascript">
$(function(){
	$("button").click(function(){
		vo = {
			name: "둘리", //$('').val() -> input 데이터 가져오기
			password: "1234",
			message: "ㅎㅇ",
			
		};
		$.ajax({
			url: "${pageContext.request.contextPath }/api/json02",
			async: true,                  // 디폴트 true , false로 지정하면 동기로 동작
			type: 'post',                 // 요청 method
			dataType: 'json',             // 받을 포맷
			contentType: 'application/json',  
			data: JSON.stringify(vo),  
			success: function(response){
				console.log(response);
				
				var html = "";
				html += ("<h2>" + response.data.no + "</h2>");
				html += ("<h3>" + response.data.name + "</h3>");
				html += ("<h4>" + response.data.message + "</h4>");
				
				$("#data").append(html);
				//$("#data").html(html);
			}
				
		});
	});
});
</script>
</head>
<body>
	<h1>AJAX Test - JSON Format Data</h1>
	
	<button>데이터 보내기</button>
	<div id="data"></div>
</body>
</html>