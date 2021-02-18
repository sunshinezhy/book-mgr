import { formatCountdown } from 'ant-design-vue/lib/statistic/utils';
import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, LinkOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';

export default defineComponent({
    components:{
        UserOutlined,
        LockOutlined,
        LinkOutlined,
    },
    setup(){
        const regForm = reactive({
            account:'',
            password:'',
        });

        const register = () => {
            auth.register(regForm.account, regForm.password);
        };

        return {
            regForm,
            register,
        };
    },
});