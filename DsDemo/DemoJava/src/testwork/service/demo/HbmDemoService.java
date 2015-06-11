/**
 * Hibernate样例Service
 */
package testwork.service.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import dswork.core.db.EntityDao;
import dswork.core.db.BaseService;
import testwork.model.Demo;
import testwork.dao.HbmDemoDao;

@Service
@SuppressWarnings("all")
public class HbmDemoService extends BaseService<Demo, Long>
{
	@Autowired
	private HbmDemoDao dao;

	@Override
	protected EntityDao getEntityDao()
	{
		return dao;
	}
}
