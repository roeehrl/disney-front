<template>
  <div>
      <person-triplets-table
        :fields-info="fileteredTableFields"
        :details-loader="detailsLoader"
        :table-data="childrenList(fileteredTableFields, [], 'id', childItemName, 'active')"
        delete-mode="both"
      ></person-triplets-table>
      <person-triplets-details
        :details="details"
        :fields-info="fileteredDetailsFields"
      ></person-triplets-details>
  </div>
</template>

<script>
import FieldsInfoMixin from '../../triplets/mixins/fields'
import LocalesMixin from '../../triplets/mixins/locales'
import CompanytripletsChildMixin from '@/utils/crud/mixins/child'
import ChildrenTable from '@/utils/crud/components/ChildrenTable.vue'
import ChildDetails from '@/utils/crud/components/ChildDetails.vue'

export default {
  mixins: [
    FieldsInfoMixin,
    LocalesMixin,
    CompanytripletsChildMixin,
  ],
  components: {
    'person-triplets-table': ChildrenTable,
    'person-triplets-details': ChildDetails,
  },
}
</script>
