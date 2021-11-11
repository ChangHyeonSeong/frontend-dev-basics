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
</head>
<script type="text/javascript">
$(function(){
	$("button").click(function(){
		$("p").load("${pageContext.request.contextPath }/api/html h2");  // h2태그만 로딩 잘안쓴다 but 특정부분만 로드할땐 쓸때도 있다
	});
});
</script>
<body>
	<h1>AJAX Test - HTML Format Data</h1>
	
	<button>변경</button>
	<p>변경전</p>
	<h2>test</h2>
</body>
</html>