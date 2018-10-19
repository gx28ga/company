/**
  *  ktable
  *  @tableSource => el-tabel props
  *  @columns => el-table-column props
  *  @pagingConfig => el-pagination props
 */

<script>
export default {
  name: "KTable",
  props: {
    tableSource: {
      type:Object,
      default:() => {}
    },
    data:{
      type:Array,
      default:() => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    pagingConfig: {
      type: Object,
      default:() => {}
    },
    currentPage: Number,
    total: Number
  },
  render(h) {
    return h("div", {
      class:{
        'k-table':true
      }
    }, [
      this.renderTable(h),
      this.total ? this.renderPagination(h) : ""
    ]);
  },

  methods: {

    renderPagination(h) {
      return h("el-pagination", {
        props: {
          layout: "total,prev, pager, next, jumper",
          "page-size": 10,
          currentPage: this.currentPage,
          total: this.total,
          ...this.pagingConfig
        },
        on: {
          "size-change": val => {
            this.$emit("size-change", val);
          },
          "current-change": val => {
            this.$emit("current-change", val);
          },
          "update:currentPage": val => {
            this.$emit("update:currentPage", val);
          }
        }
      });
    },
    renderTable(h) {
      return h(
        "el-table",
        {
          props: {
            ...this.tableSource,
            // border: true,
            data:this.data
          },
          on: {
            "selection-change": val => {
              this.$emit("selection-change", val);
            }
          }
        },
        [
          ...this.columns.map(column => {
            if (column.render) {
              return h("el-table-column", {
                props: {
                  ...column
                },

                scopedSlots: {
                  default: props => {
                    return column.render(h, props);
                  }
                }
              });
            } else {
              return h("el-table-column", {
                props: {
                  ...column
                }
              });
            }
          })
        ]
      );
    }
  }
};
</script>
<style lang="less" type="text/less" scoped>
.k-table{
  .el-pagination{
    text-align: right;
    margin-top: 10px;
  }
}
</style>