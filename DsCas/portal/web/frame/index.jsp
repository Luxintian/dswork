﻿﻿<%@page language="java" pageEncoding="UTF-8" import="dswork.cas.CasFilter"%><%
String path = request.getContextPath();
Object obj = session.getAttribute(CasFilter.KEY_SESSIONUSER);
String username = String.valueOf(obj).trim();
if(obj == null || username.length() == 0 || username.equals("null"))
{
	response.sendRedirect(path + "/logout.jsp");
	return;
}
%><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>门户首页</title>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<!--收藏夹显示图标-->
<link rel="bookmark" type="image/x-icon" href="<%=path %>/favicon.ico"/>
<!--地址栏显示图标-->
<link rel="icon" type="image/x-icon" href="<%=path %>/favicon.ico" />
<link rel="shortcut icon" type="image/x-icon" href="<%=path %>/favicon.ico" />
</head>
<frameset id="fk" name="fk" rows="76,*,24" cols="*" frameborder="no" border="0" framespacing="0">
	<frame src="<%=path %>/frame/top.jsp" id="topFrame" name="topFrame" scrolling="no" noresize="noresize"/>
	<frame src="<%=path %>/frame/middle.html?data=<%=Math.random()%>" id="middleFrame" name="middleFrame" scrolling="no" noresize="noresize"/>
	<frame src="<%=path %>/frame/bottom.html" id="bottomFrame" name="bottomFrame" scrolling="no" noresize="noresize"/>
</frameset>
<noframes>
	<body></body>
</noframes>
</html>