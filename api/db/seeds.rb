
1.upto(5) { |n| Todo.create(title: "未着手タスク#{n}", status: 1) }
1.upto(5) { |n| Todo.create(title: "完了タスク#{n}", status: 2) }
