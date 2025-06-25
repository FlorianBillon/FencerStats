
const { JFrame, FlowLayout } = require('javax.swing');

class GuiBeginner {
  createGUI() {
    const frame = new JFrame('Beginner');
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(400, 250);
    frame.setLayout(new FlowLayout());

    frame.setVisible(true);
  }
}




