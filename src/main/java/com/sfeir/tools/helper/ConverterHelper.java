package com.sfeir.tools.helper;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.core.GenericEntity;

import org.apache.commons.beanutils.BeanUtilsBean2;

import com.sfeir.domain.Attender;
import com.sfeir.tools.business.AttenderVO;

public class ConverterHelper {

    public static Attender toAttender(AttenderVO vo) {
        Attender dest = new Attender();
        try {
            BeanUtilsBean2.getInstance().copyProperties(dest, vo);
        } catch (IllegalAccessException e1) {
            e1.printStackTrace();
        } catch (InvocationTargetException e1) {
            e1.printStackTrace();
        }
        return dest;
    }

    public static List<Attender> toAttenders(List<AttenderVO> list) {
        List<Attender> result = new ArrayList<Attender>();
        for (AttenderVO src : list) {
            result.add(toAttender(src));
        }
        return result;
    }

    public static AttenderVO toAttenderVo(Attender entity) {
        AttenderVO vo = new AttenderVO();
        try {
            BeanUtilsBean2.getInstance().copyProperties(vo, entity);
            vo.setId(entity.getKey().toString());
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return vo;
    }

    public static GenericEntity<List<AttenderVO>> toAttenderVOList(List<Attender> attenders) {
        List<AttenderVO> result = new ArrayList<>();
        for (Attender attender : attenders) {
            result.add(toAttenderVo(attender));
        }
        return new GenericEntity<List<AttenderVO>>(result) {
        };
    }

}
