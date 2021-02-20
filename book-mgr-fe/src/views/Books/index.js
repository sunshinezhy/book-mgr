import { defineComponent } from 'vue';

export default defineComponent({
    setup () {
        const columns = [
            {
                title: '名字',
                dataIndex: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
            },
        ];
        const dataSource = [
            {
                name: '小明',
                age: 2,
            }
        ];

        return {    
            columns,
            dataSource,
        };
    },
});