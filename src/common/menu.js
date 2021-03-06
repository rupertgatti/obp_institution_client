import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    path: 'dashboard',
  },
  {
    name: 'Institutions',
    icon: 'book',
    path: 'institutions',
    children: [
      {
        name: 'List',
        path: 'list',
      },
      {
        name: 'Add',
        path: 'add',
      },
    ],
  },
  {
    name: 'Login',
    icon: 'user',
    path: 'login',
    authority: 'guest',
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
