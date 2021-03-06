<%@page language="java" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html>
<html>
<c:if test="${siteid<0}">
<head>
<title></title>
<%@include file="/commons/include/get.jsp" %>
<body>
<table border="0" cellspacing="0" cellpadding="0" class="listLogo">
	<tr><td class="title">信息发布：没有可管理的站点</td></tr>
</table>
</body>
</c:if>
<c:if test="${siteid>=0}">
<head>
<title></title>
<%@include file="/commons/include/get.jsp"%>
<%@include file="/commons/include/ztree.jsp"%>
<script type="text/javascript">
$dswork.callback = null;
$dswork.ztree.beforeClick = function(treeId, treeNode, clickFlag){
	return treeNode.enable == "true";
};
$dswork.ztree.rightClick = function(event, treeId, treeNode){
	return treeNode.enable == "true";
};
$dswork.ztree.beforeDblClick = function(treeId, treeNode){
	return treeNode.enable == "true";
}
$dswork.ztree.click = function(){
	var node = $dswork.ztree.getSelectedNode();
	if(node.scope == 0){
		attachUrl("getPage.htm?id=" + node.id);
		return false;
	}else{
		attachUrl("updCategory1.htm?id=" + node.id);
		return false;
	}
	attachUrl("");
	return false;
};
$dswork.ztree.dblClick = function(){
	var node = $dswork.ztree.getSelectedNode();
	attachUrl("updCategory1.htm?id=" + node.id);
	return false;
};
$(function(){
	var v = [];
	<c:forEach items="${categoryList}" var="d">
	v.push({"id":"${d.id}", "pid":"${d.pid}", "name":"${fn:escapeXml(d.name)} [${d.scope==0?'列表':d.scope==1?'单页':'外链'}]", "scope":"${d.scope}", "enable":"${d.enable}"});
	</c:forEach>
	$dswork.ztree.nodeArray = v;
	$dswork.ztree.config.async.enable = false;
	var $z = $dswork.ztree;
	$z.load();
	$z.expandAll(true);
	$("#site").bind("click", function(){
		if($(this).val()!="${siteid}"){
			location.href = "getCategoryTree.htm?siteid="+$(this).val();
		}
	});
});
</script>
</head>
<body class="easyui-layout treebody" fit="true">
<div region="north" style="overflow:hidden;border:0px;height:30px;">
<table border="0" cellspacing="0" cellpadding="0" class="listLogo">
	<tr>
		<td class="title">
			切换站点：<select id="site"><c:forEach items="${siteList}" var="d"><option value="${d.id}"<c:if test="${d.id==siteid}"> selected="selected"</c:if>>${fn:escapeXml(d.name)}</option></c:forEach></select>
		</td>
	</tr>
</table>
</div>
<div region="west" split="true" style="width:255px;">
	<div class="treediv">
		<ul id="mytree" class="ztree tree"></ul>
	</div>
</div>
<div region="center" style="overflow:hidden;">
	<iframe id="mainFrame" src="" frameborder="0" scrolling="auto" style="width:100%;height:100%;"></iframe>
</div>
</body>
</c:if>
</html>
