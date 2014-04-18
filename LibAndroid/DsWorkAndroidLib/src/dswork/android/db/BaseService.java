package dswork.android.db;

import java.io.Serializable;
import java.util.List;

import android.content.ContentValues;
import android.database.Cursor;

public abstract class BaseService<T, PK extends Serializable>
{
	public abstract BaseDao<T, PK> getEntityDao();
	
	/**
	 * 新增记录
	 * @param o model对象
	 */
	public void add(T o)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().add(o);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}
	/**
	 * 新增记录
	 * @param sql sql语句
	 * @param values insert语句values值数组
	 */
	public void add(String sql, Object...values)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().add(sql, values);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}
	
	/**
	 * 删除记录
	 * @param table 表名
	 * @param primaryKey 主键值
	 */
	public void delete(String table, PK primaryKey)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().delete(table, primaryKey);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}
	/**
	 * 删除记录(批量)
	 * @param table 表名
	 * @param pks 主键值集合
	 */
	public void deleteBatch(String table, List<PK> pks)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().deleteBatch(table, pks);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}	
	/**
	 * 修改记录
	 * @param table 表名
	 * @param values 要修改的列的键值对
	 * @param whereClause where条件(如："id=? and name=?")
	 * @param whereArgs where条件参数数组，数组长度需跟where条件的?号个数对应（如：new String[]{"001","张三"}）
	 */
	public void update(String table, ContentValues values, String whereClause, String[] whereArgs)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().update(table, values, whereClause, whereArgs);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}
	/**
	 * 修改记录
	 * @param o Model实例
	 * @param ids 主键值数组
	 * @param fieldNames 需要修改的属性名
	 */
	public void update(T o, long[] ids, String[] fieldNames)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().update(o, ids, fieldNames);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}
	/**
	 * 修改记录
	 * @param o Model实例
	 * @param ids 主键值数组
	 */
	public void update(T o, long[] ids)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().update(o, ids);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}
	/**
	 * 修改记录
	 * @param sql SQL的update语句
	 * @param values update语句对应的问号值
	 */
	public void udpate(String sql, Object...values)
	{
		getEntityDao().beginTransaction();
		try
		{
			getEntityDao().update(sql,values);
			getEntityDao().setTransactionSuccessful();
		}
		finally
		{
			getEntityDao().endTransaction();
		}
		getEntityDao().close();
	}

	/**
	 * 查询
	 * @param table 表名
	 * @param columns 列名数组
	 * @param selection where条件(如："id=? and name=?")
	 * @param selectionArgs where条件参数数组，数组长度需跟where条件的?号个数对应（如：new String[]{"001","张三"}）
	 * @param groupBy 分组
	 * @param having 分组条件
	 * @param orderBy 排序类
	 * @return
	 */
	public Cursor queryCursor(String table, String[] columns, String selection, String[] selectionArgs, String groupBy, String having, String orderBy)
	{
		return getEntityDao().queryCursor(table, columns, selection, selectionArgs, groupBy, having, orderBy);
	}
	/**
	 * 分页查询
	 * @param o model对象
	 * @param orderBy 排序
	 * @param offet 记录索引
	 * @param maxResult 需要显示的记录数
	 * @return
	 */
	public Cursor queryCursorScrollData(T o, String orderBy, int offset, int maxResult)
	{
		return getEntityDao().queryCursorScrollData(o, orderBy, offset, maxResult);
	}
	/**
	 * 获取记录数
	 * @param sql sql count语句
	 * @param values where条件参数数组，数组长度需跟where条件的?号个数对应（如：new String[]{"001","张三"}）
	 * @return
	 */
	public int getCount(String table)
	{
		return getEntityDao().getCount(table);
	}
}
