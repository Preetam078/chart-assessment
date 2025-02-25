import { useState } from 'react';
import { 
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TextField 
} from '@mui/material';
import styles from './styles.module.css';
import { useDebounce } from '../../hooks/use-debounce';

// Define the type for each stream entry
interface Stream {
    song: string;
    artist: string;
    dateStreamed: string;
    streams: number;
    userId: number;
}

// Example data (ensure you import from actual source)
import { recentStreams } from '../../data'; // Ensure recentStreams is typed as Stream[]

const RecentStreamsTable = () => {
    const [orderBy, setOrderBy] = useState<keyof Stream>('dateStreamed');
    const [order, setOrder] = useState<'asc' | 'desc'>('desc');
    const [searchQuery, setSearchQuery] = useState<string>(''); 

    // Debounced search value (delays updates)
    const debouncedSearchQuery = useDebounce(searchQuery, 300); 

    const handleSort = (property: keyof Stream) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // Filter data based on search query
    const filteredData = recentStreams.filter((stream) => 
        stream.song.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        stream.artist.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        stream.userId.toString().includes(debouncedSearchQuery)
    );

    // Sort filtered data
    const sortedData = [...filteredData].sort((a:any, b:any) => {
        if (orderBy === 'streams' || orderBy === 'userId') {
            return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
        } else {
            return order === 'asc' 
                ? new Date(a[orderBy]).getTime() - new Date(b[orderBy]).getTime()
                : new Date(b[orderBy]).getTime() - new Date(a[orderBy]).getTime();
        }
    });

    return (
        <div className={styles.container}>
            <h3>Recent Streams</h3>

            {/* Search Input with Debounce */}
            <TextField
                label="Search Song, Artist, or User ID"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ marginBottom: '10px' }}
            />

            <TableContainer component={Paper}>
                <Table aria-label="recent streams table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Song</TableCell>
                            <TableCell>Artist</TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'dateStreamed'}
                                    direction={orderBy === 'dateStreamed' ? order : 'asc'}
                                    onClick={() => handleSort('dateStreamed')}
                                >
                                    Date Streamed
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'streams'}
                                    direction={orderBy === 'streams' ? order : 'asc'}
                                    onClick={() => handleSort('streams')}
                                >
                                    Streams
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'userId'}
                                    direction={orderBy === 'userId' ? order : 'asc'}
                                    onClick={() => handleSort('userId')}
                                >
                                    User ID
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.length > 0 ? (
                            sortedData.map((stream, index) => (
                                <TableRow key={index}>
                                    <TableCell>{stream.song}</TableCell>
                                    <TableCell>{stream.artist}</TableCell>
                                    <TableCell>{stream.dateStreamed}</TableCell>
                                    <TableCell>{stream.streams}</TableCell>
                                    <TableCell>{stream.userId}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} style={{ textAlign: 'center', fontStyle: 'italic' }}>
                                    No results found
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RecentStreamsTable;
