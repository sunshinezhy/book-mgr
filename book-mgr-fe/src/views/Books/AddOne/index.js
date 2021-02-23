import { defineComponent, reactive} from 'vue';
import { book } from '@/service';
import { message } from 'ant-design-vue';
import { result, clone } from '@/helpers/utils';

const defultFormData = {
    name: '',
    price: 0,
    author: '',
    publishDate: 0,
    classify: '',
    count: '',
}

export default defineComponent({
    props: {
        show: Boolean,
    },
    setup (props, context) {
        console.log(props);
        const addForm = reactive(clone(defultFormData));

        const submit = async () => {
            const form = clone(addForm);
            form.publishDate = addForm.publishDate.valueOf();
           const res = await book.add(form);

           result(res).success((d,{data}) =>{
            Object.assign(addForm, defultFormData);
            message.success(data.msg);
            close();
           });
           
           
        };

        const close = () => {
            context.emit('update:show', false);
        };

        return {
            addForm,
            submit,
            props,
            close,
        };
    },
});