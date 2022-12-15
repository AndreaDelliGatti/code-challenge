export interface TreeNode {
    height: number,
    value: number,
    left: TreeNode | null,
    right: TreeNode | null
}

const buildTree = (root: TreeNode | null, curr_index = 0, index = false, delimiter = '-'): any[] => {
    if (!root) return [[], 0, 0, 0];
    let line1: any[] = [];
    let line2: any[] = []
    let node_repr = index ? `${curr_index}${delimiter}${root.value}` : root.value.toString();
    let new_root_width = node_repr.length;
    let gap_size = node_repr.length;
    let [l_box, l_box_width, l_root_start, l_root_end] = buildTree(root.left, (2 * curr_index) + 1, index, delimiter);
    let [r_box, r_box_width, r_root_start, r_root_end] = buildTree(root.right, (2 * curr_index) + 2, index, delimiter);
    let new_root_start = 0;
    let new_root_end = 0;
    if (l_box_width > 0) {
        let l_root = Math.floor((l_root_start + l_root_end) / 2) + 1;
        line1.push(' '.repeat(l_root + 1));
        line1.push('_'.repeat(l_box_width - l_root));
        line2.push(' '.repeat(l_root) + '/');
        line2.push(' '.repeat(l_box_width - l_root));
        new_root_start = l_box_width + 1;
        gap_size += 1;
    } else {
        new_root_start = 0;
    }
    line1.push(node_repr);
    line2.push(' '.repeat(new_root_width));
    if (r_box_width > 0) {
        let r_root = Math.floor((r_root_start + r_root_end) / 2);
        line1.push('_'.repeat(r_root));
        line1.push(' '.repeat(r_box_width - r_root + 1));
        line2.push(' '.repeat(r_root) + '\\');
        line2.push(' '.repeat(r_box_width - r_root));
        gap_size += 1;
    }
    new_root_end = new_root_start + new_root_width - 1;
    let new_box = [line1.join(''), line2.join('')];
    let l_line, r_line;
    for (let i = 0; i < Math.max(l_box.length, r_box.length); i++) {
        if (i < l_box.length) l_line = l_box[i];
        else l_line = ' '.repeat(l_box_width);
        if (i < r_box.length) r_line = r_box[i];
        else r_line = ' '.repeat(r_box_width);
        new_box.push(l_line + ' '.repeat(gap_size) + r_line);
    }
    return [new_box, new_box[0].length, new_root_start, new_root_end];
};

export function print(root: TreeNode | null) {
    let lines = buildTree(root, 0, false, '-')[0];
    let output = "";
    for (let line of lines) {
        output += line + '\n';
    }
    return output;
}